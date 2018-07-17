import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordinatingActivityComponent } from './coordinating-activity/coordinating-activity.component';

const routes: Routes = [
  {path:'actividad-coordinador', component:CoordinatingActivityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }
