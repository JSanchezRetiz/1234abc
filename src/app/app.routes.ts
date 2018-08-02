import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './login/home/home.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: '',
    component: HomeComponent,
    children: [{
        component: DashboardComponent,
        path: 'dashboard',
      }, {
        path: '',
        loadChildren: './users/users.module#UsersModule',
      },
      {
        path: 'menu',
        loadChildren: 'app/menu/menu.module#MenuModule',
      },
      
    ],
  },
];

export const appRoutes: any = RouterModule.forRoot(routes);
