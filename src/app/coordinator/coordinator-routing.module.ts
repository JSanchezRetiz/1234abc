import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordinatingActivityComponent } from './coordinating-activity/coordinating-activity.component';
import { EditComponent } from './edit/edit.component';
import { CreateRewardComponent } from '../coordinator/create-reward/create-reward.component';
import { EditRewardComponent } from '../coordinator/edit-reward/edit-reward.component';
import { CoordinatorProfileComponent } from './coordinator-profile/coordinator-profile.component';
import { CoordinatorRewardComponent } from './coordinator-reward/coordinator-reward.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import {MenuComponent} from '../menu/menu/menu.component';
import { MedalsCoordinatorComponent } from './medals-coordinator/medals-coordinator.component';
import { CreateMedalsComponent } from '../coordinator/create-medals/create-medals.component';
import { EditMedalsComponent } from '../coordinator/edit-medals/edit-medals.component';

const routes: Routes = [
  {
    path: 'actividad-coordinador', component: MenuComponent,
    children: [{ path: '', component: CoordinatingActivityComponent },]
  },
   { path: 'editar-actividad', component: EditComponent },
   { path: 'crear-recompensa', component: CreateRewardComponent },
   { path: 'editar-recompensa', component: EditRewardComponent },
  { path: 'perfil-coordinador', component: CoordinatorProfileComponent},
  { path: 'recompensa-coordinador', component:CoordinatorRewardComponent },
  { path: 'crear-actividad', component:CreateActivityComponent },
  { path: 'medallas-coordinador', component:MedalsCoordinatorComponent},
  { path: 'crear-medallas', component:CreateMedalsComponent},
  { path: 'editar-medallas', component:EditMedalsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }
