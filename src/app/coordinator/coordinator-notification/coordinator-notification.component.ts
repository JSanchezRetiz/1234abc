import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdDialogService } from '@covalent/core/dialogs';
import { TdLoadingService } from '@covalent/core/loading';
import { Router } from '@angular/router';
import { CreateNotificationComponent } from '../create-notification/create-notification.component';
import { EditNotificationComponent } from '../edit-notification/edit-notification.component';
import { notificationDto } from '../models/notificationDto';
import { CoordinatorService } from '../services/coordinator.service';

@Component({
  selector: 'app-coordinator-notification',
  templateUrl: './coordinator-notification.component.html',
  styleUrls: ['./coordinator-notification.component.scss'],
  providers: [TdDialogService, CoordinatorService],
})
export class CoordinatorNotificationComponent implements OnInit {
  notifications: notificationDto[];
  notificationSend: notificationDto;
  fecha1: Date;
  endTime: Date;

  constructor(private coordinatorSVC:CoordinatorService, private _loadingService: TdLoadingService, private _router: Router, private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private _dialogRef: MatDialog) { 
    this.notifications= new Array<notificationDto>();
    this.notificationSend = new notificationDto();
  }


  crear(notificationSend:notificationDto) {
    const dialogRef = this._dialogRef.open(CreateNotificationComponent, {
      width: '1000px',
      height: '600px',
      data: { data:notificationSend }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllNotification();
    });
  }

  editar(notification:notificationDto) {
    const dialogRef = this._dialogRef.open(EditNotificationComponent, {
    width: '1000px',
      height: '600px',
      data: { data: this.notifications, notification:notification}
      
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllNotification();

     });
   }

   getAllNotification(){
    this._loadingService.register();
     this.coordinatorSVC.getAllNotification().then(res =>{
       this.notifications= res;
       console.log(res);
       this._loadingService.resolve();
     })
   }

   eliminar(dato: notificationDto) {
    this._loadingService.register();
    console.log("id", dato.id)
    localStorage.setItem('id', dato.id);
    console.log(dato)
    this.coordinatorSVC.deleteNotification(dato).then(res => {
      this.notificationSend = res;
      console.log(res);
      this.getAllNotification();
      this._loadingService.resolve();
    })
  }

  Confirmar(dato: notificationDto): void {
    this._dialogService.openConfirm({
      message: 'Esta seguro de eliminar esta ntificacion?',
      disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      cancelButton: 'Cancelar', //OPTIONAL, defaults to 'CANCEL'
      acceptButton: 'Confirmar', //OPTIONAL, defaults to 'ACCEPT'
      width: '500px', //OPTIONAL, defaults to 400px
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.eliminar(dato)
      } else {
        this.cerrar();
      }
    });
  }

  cerrar() {
    this._dialogRef.closeAll();
  }

  Volver() {
    this._router.navigate(["dashboard-usuarios"]);
  }



  ngOnInit() {
    this.getAllNotification();
  }

}
