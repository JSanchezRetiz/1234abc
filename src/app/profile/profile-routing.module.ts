import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from '../profile/profile/profile.component';
import { MainComponent } from '../main.component';



const routes: Routes = [
  // {path:'perfil', component: ProfileComponent },
{path: 'perfil',
    component: ProfileComponent,
  }, {
    path: '',
    component: MainComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
