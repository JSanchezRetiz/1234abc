import { Component, OnInit } from '@angular/core';
import { uidDto } from '../../login/models/uidDto';
import { userDto } from '../../login/models/userDto';
import { LoginService } from '../../login/service/login.service';
import { Router } from '@angular/router';
import { TdLoadingService } from '@covalent/core/loading';
import { CoordinatorService } from '../../coordinator/services/coordinator.service';
import { medalDto } from '../../coordinator/models/medalDto';
import { notificationDto } from '../../coordinator/models/notificationDto';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [CoordinatorService, TdLoadingService]
})
export class ProfileComponent implements OnInit {
  notifications: notificationDto[];
  notificationSend: notificationDto;
  uidDto: uidDto;
  userDto: userDto;
  creationDate: Date;
  medal: medalDto[];
  medals: medalDto;

  ruta: Object[] = [{
    //   title: 'Dashboard',
    //   route: '/dashboard',
    //   icon: 'medallas',
    // }, {
    //   title: 'Manage Users',
    //   route: '/users',
    //   icon: 'people',
    // },
    // {
    title: 'medallas',
    route: '/medallas',
    icon: 'people',
  },
  ];
  constructor(private _router: Router, private loginSVC: LoginService, private _loadingService: TdLoadingService, private coordinatorSVC: CoordinatorService) {
    this.notifications = Array<notificationDto>();
    this.notificationSend = new notificationDto();
    this.uidDto = new uidDto();
    this.userDto = new userDto();
    this.medal = new Array<medalDto>();
    this.medals = new medalDto();
  }

  getNotificationsGlobal() {
    this.notificationSend.allUser
    console.log(this.notificationSend.allUser)
    this.coordinatorSVC.getNotificationsGlobal(this.notificationSend).then(res => {
      this.notifications = res;
      console.log(res);
    })
  }

  getAllNotification() {

    this.coordinatorSVC.getAllNotification().then(res => {
      this.notifications = res;
      console.log(res);

    })
  }

  getAllMedals() {
    this.coordinatorSVC.getAllMedals().then(res => {
      this.medal = res;
    })
  }

  logout(): void {
    var rta = false;
    rta = confirm("Desea Cerrar Sesion")
    if (rta == true) {
      this.loginSVC.logout();
      this._router.navigate(['/login'])
    }
    else {
      this._router.navigate(['/perfil']);
    }
  }

  perfil() {
    this._router.navigate(['actividades']);
  }

  Ver_mas() {
    this._router.navigate(["medallas"]);
  }

  Ver_notificaciones() {
    this._router.navigate(["notificaciones"]);
  }

  ngOnInit() {
    this.getUserData();
    this.getAllMedals();
    this.getAllNotification();

  }
  getUserData() {
    this._loadingService.register();
    this.uidDto.id = localStorage.getItem('uid');
    this.loginSVC.getUserData(this.uidDto).then(res => {
      this.userDto = res;
      this._loadingService.resolve();
      this._loadingService.resolve();
      console.log(this.userDto.name, this.userDto.lastname, this.userDto.experience);
    })
  }
}