import { Component, OnInit } from '@angular/core';
import { notificationDto } from '../models/notificationDto';
import { CoordinatorService } from '../services/coordinator.service';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss'],
  providers: [CoordinatorService,TdLoadingService],
})
export class CreateNotificationComponent implements OnInit {
  notificationSend: notificationDto;
  fecha1: Date;
  endTime: Date;



  constructor(private _loadingService: TdLoadingService, private dialog: TdDialogService, public dialogRef: MatDialogRef<CreateNotificationComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef, private coordinatorSVC:CoordinatorService) {
    this.notificationSend = new notificationDto();
   }


   createNotification(){
    this._loadingService.register();
     this.coordinatorSVC.createNotification(this.notificationSend).then(res =>{
       this.notificationSend= res;
       console.log(res);
       this._loadingService.resolve();
       this.guardar();
     })
   }

   guardar() {
    this.dialog.openAlert({
      message: 'Se ha creado la notificacion adecuadamente',
      disableClose: false, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      closeButton: 'Cerrar', //OPTIONAL, defaults to 'CLOSE'
      width: '400px', //OPTIONAL, defaults to 400px
    }).afterClosed().subscribe(
      result => {
        this.dialogRef.close();
      }
      );
  }

  ngOnInit() {
  }

}
