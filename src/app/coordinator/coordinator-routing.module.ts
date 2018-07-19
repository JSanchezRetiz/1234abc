import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordinatingActivityComponent } from './coordinating-activity/coordinating-activity.component';
import { EditComponent } from './edit/edit.component';
import { CreateRewardComponent } from '../coordinator/create-reward/create-reward.component';
import { EditRewardComponent } from '../coordinator/edit-reward/edit-reward.component';

const routes: Routes = [
  { path: 'actividad-coordinador', component: CoordinatingActivityComponent },
  { path: 'editar-actividad', component: EditComponent },
  { path: 'crear-recompensa', component: CreateRewardComponent },
  { path: 'editar-recompensa', component: EditRewardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }
