import { Component, OnInit } from '@angular/core';
import { uidDto } from '../../login/models/uidDto';
import { userDto } from '../../login/models/userDto';
import { LoginService } from '../../login/service/login.service';
import { Router } from '@angular/router';
import { TdLoadingService } from '@covalent/core/loading';
import { CoordinatorService } from '../../coordinator/services/coordinator.service';
import { medalDto } from '../../coordinator/models/medalDto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [CoordinatorService, TdLoadingService]
})
export class ProfileComponent implements OnInit {
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
    this.uidDto = new uidDto();
    this.userDto = new userDto();
    this.medal = new Array<medalDto>();
    this.medals = new medalDto();
  }

  getAllMedals() {
    this.coordinatorSVC.getAllMedals().then(res => {
      this.medals = res;
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
  ngOnInit() {
    this.getUserData();
    this.getAllMedals();
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