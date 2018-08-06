import { Component, OnInit, Inject } from '@angular/core';
import { CoordinatorService } from '../services/coordinator.service';
import { notificationDto } from '../models/notificationDto';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdLoadingService } from '@covalent/core/loading';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-notification',
  templateUrl: './edit-notification.component.html',
  styleUrls: ['./edit-notification.component.scss'],
  providers: [CoordinatorService,TdLoadingService],
})
export class EditNotificationComponent implements OnInit {
  notifications: any;
  notification: notificationDto;
 
  constructor(private dialog: TdDialogService, public dialogRef: MatDialogRef<EditNotificationComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef,private _loadingService: TdLoadingService, private coordinatorSVC:CoordinatorService,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.notification = data.data;
    this.notifications = data.notification;
    console.log(this.notifications);
    
   }

   updateNotification() {
    console.log("update",this.notifications);
    this._loadingService.register();
    this.notifications.id
    this.coordinatorSVC.updateNotification(this.notifications).then(res => {
      this.notifications = res;
      console.log(this.notifications);
      this.salir();
      this._loadingService.resolve();
    })
  }

  salir() {
    this.dialog.openAlert({
      message: 'Se ha editado la actividad adecuadamente',
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
    // this.dialogRef.close('cerrar');
  }

  cerrar() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
