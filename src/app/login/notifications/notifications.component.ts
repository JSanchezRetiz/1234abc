import { Component, OnInit } from '@angular/core';
import { notificationDto } from '../../coordinator/models/notificationDto';
import { CoordinatorService } from '../../coordinator/services/coordinator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  providers: [CoordinatorService]
})
export class NotificationsComponent implements OnInit {
  notifications: notificationDto[];
  notificationSend: notificationDto;
  constructor(private _router: Router, private coordinatorSVC: CoordinatorService, ) {
    this.notifications = Array<notificationDto>();
    this.notificationSend = new notificationDto();
  }
  getAllNotification() {
    this.coordinatorSVC.getAllNotification().then(res => {
      this.notifications = res;
      this.getNotificationsGlobal();
      console.log(res);
    })
  }
  getNotificationsGlobal() {
    this.notificationSend.allUser = "Todos";
    console.log("allUser", this.notificationSend.allUser);
    this.coordinatorSVC.getNotificationsGlobal(this.notificationSend).then(res => {
      this.notifications = res;
      console.log("respuesta", this.notifications);
    })
  }

  Volver() {
    this._router.navigate(["perfil"]);
  }

  ngOnInit() {

 this.getAllNotification();
  }

}
