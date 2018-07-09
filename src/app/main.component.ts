import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from './loginn/service/login.service'
@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
    title: 'Dashboard',
    route: '/',
    icon: 'dashboard',
  }, {
    title: 'Manage Users',
    route: '/users',
    icon: 'people',
  },
  {
    title: 'Mi Perfil',
    route: '/perfil',
    icon: 'people',
  },
  ];

  constructor(private _router: Router, private loginSVC: LoginService) { }

  logout(): void {
    var rta = false;
    rta = confirm("Desea Cerrar Sesion")
    if (rta == true) {
      this.loginSVC.logout();
      this._router.navigate(['/login'])
    }
    else{
    this._router.navigate(['/perfil']);
    }
  }
}
