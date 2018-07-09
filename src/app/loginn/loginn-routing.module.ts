import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../loginn/login/login.component';
import { ForgetComponent } from './forget/forget.component';

import { MedalsComponent } from './medals/medals.component';

const routes: Routes = [
  { path: 'conectarse', component: LoginComponent },
  { path: 'olvidarContrasena', component: ForgetComponent },
  { path:'medallas', component:MedalsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginnRoutingModule { }