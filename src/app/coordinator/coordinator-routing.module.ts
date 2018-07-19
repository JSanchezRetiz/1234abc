import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordinatingActivityComponent } from './coordinating-activity/coordinating-activity.component';
import { EditComponent } from './edit/edit.component';
import { CoordinatorProfileComponent } from './coordinator-profile/coordinator-profile.component';

const routes: Routes = [
  {path:'actividad-coordinador', component:CoordinatingActivityComponent},
  {path:'editar-actividad', component:EditComponent},
  {path:'perfil-coordinador', component:CoordinatorProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }
