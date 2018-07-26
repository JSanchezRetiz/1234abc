import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordinatingActivityComponent } from './coordinating-activity/coordinating-activity.component';
import { EditComponent } from './edit/edit.component';
import { CreateRewardComponent } from '../coordinator/create-reward/create-reward.component';
import { EditRewardComponent } from '../coordinator/edit-reward/edit-reward.component';
import { CoordinatorProfileComponent } from './coordinator-profile/coordinator-profile.component';
import { CoordinatorRewardComponent } from './coordinator-reward/coordinator-reward.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';

const routes: Routes = [
  { path: 'actividad-coordinador', component: CoordinatingActivityComponent },
  { path: 'editar-actividad', component: EditComponent },
  { path: 'crear-recompensa', component: CreateRewardComponent },
  { path: 'editar-recompensa', component: EditRewardComponent },
  { path: 'perfil-coordinador', component: CoordinatorProfileComponent},
  { path: 'recompensa-coordinador', component:CoordinatorRewardComponent },
  { path: 'crear-actividad', component:CreateActivityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }
