import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { MainComponent } from '../main.component';

import { MedalsComponent } from './medals/medals.component';
import { RegisterComponent } from './register/register.component';

 const routes: Routes =
//   { path: 'conectarse', component: LoginComponent },
//   { path: 'olvidarContrasena', component: ForgetComponent },
//   { path:'medallas', component:MedalsComponent },
//   { path: 'registro', component:RegisterComponent }
// ];
[{
  path: 'login',
  component: LoginComponent,
}, {
  path: '',
  component: MainComponent,
  children: [{
      component: MedalsComponent,
      path: 'medallas',
    }, {
      component: RegisterComponent,
      path: 'registro',
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginnRoutingModule { }
