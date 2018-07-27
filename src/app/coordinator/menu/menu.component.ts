import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from '../../login/service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  
  routes: Object[] = [{
    title: 'Actividades',
    route: '/actividad-coordinador',
    icon: 'dashboard',
  }, {
    title: 'Perfil',
    route: '/perfil-coordinador',
    icon: 'people',
  },
  {
    title: 'Recompensas',
    route: '/recompensa-coordinador',
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
  ngOnInit() {
  }

}
