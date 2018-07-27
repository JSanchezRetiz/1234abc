import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  routes: Object[] = [{
    title: 'perfil',
    route: '/perfil',
    icon: 'dashboard',
  }, {
    title: 'Manage Users',
    route: '/users',
    icon: 'people',
  },
  {
    title: 'Perfil',
    route: '/perfil',
    icon: 'people',
  },
  ];
  constructor(private _router: Router, ) { }

  ngOnInit() {
  }

}
