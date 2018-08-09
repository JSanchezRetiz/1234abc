import { Component, OnInit } from '@angular/core';
import { notificationDto } from '../../coordinator/models/notificationDto';
import { CoordinatorService } from '../../coordinator/services/coordinator.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  providers: [CoordinatorService]
})
export class NotificationsComponent implements OnInit {
  notifications: notificationDto[];
  notificationSend: notificationDto;
  constructor(private coordinatorSVC:CoordinatorService,) {
    this.notifications = Array <notificationDto>();
    this.notificationSend = new notificationDto();
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
