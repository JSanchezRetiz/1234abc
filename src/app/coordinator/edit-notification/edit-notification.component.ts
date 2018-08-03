import { Component, OnInit, Inject } from '@angular/core';
import { CoordinatorService } from '../services/coordinator.service';
import { notificationDto } from '../models/notificationDto';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-notification',
  templateUrl: './edit-notification.component.html',
  styleUrls: ['./edit-notification.component.scss'],
  providers: [CoordinatorService],
})
export class EditNotificationComponent implements OnInit {
  notifications: any;
  notification: notificationDto;
 
  constructor(private coordinatorSVC:CoordinatorService,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.notifications = data.data;
    this.notification = data.notification;
    console.log(this.notifications);
    
   }




  ngOnInit() {
  }

}
