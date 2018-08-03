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

  constructor(private coordinatorSVC:CoordinatorService, private _loadingService: TdLoadingService, private _router: Router, private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private _dialogRef: MatDialog) { 
    this.notifications= new Array<notificationDto>();
    this.notificationSend = new notificationDto();
  }


  crear() {
    const dialogRef = this._dialogRef.open(CreateNotificationComponent, {
      width: '1000px',
      height: '600px',
      data: { data: 'dato' }
    });
    dialogRef.afterClosed().subscribe(result => {
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
     this.coordinatorSVC.getAllNotification().then(res =>{
       this.notifications= res;
       console.log(res);
     })
   }




  ngOnInit() {
    this.getAllNotification();
  }

}
