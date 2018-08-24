import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordinatingActivityComponent } from './coordinating-activity/coordinating-activity.component';
import { EditComponent } from './edit/edit.component';
import { CreateRewardComponent } from '../coordinator/create-reward/create-reward.component';
import { EditRewardComponent } from '../coordinator/edit-reward/edit-reward.component';
import { CoordinatorProfileComponent } from './coordinator-profile/coordinator-profile.component';
import { CoordinatorRewardComponent } from './coordinator-reward/coordinator-reward.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { MenuComponent } from '../menu/menu/menu.component';
import { MedalsCoordinatorComponent } from './medals-coordinator/medals-coordinator.component';
import { CreateMedalsComponent } from '../coordinator/create-medals/create-medals.component';
import { EditMedalsComponent } from '../coordinator/edit-medals/edit-medals.component';
import { CoordinatorNotificationComponent } from './coordinator-notification/coordinator-notification.component';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { EditNotificationComponent } from './edit-notification/edit-notification.component';
import { UsersComponent } from '../coordinator/users/users.component';
import { RegisterComponent } from '../login/register/register.component';
import { DashboardUsersComponent } from '../coordinator/dashboard-users/dashboard-users.component';
import { EditUsersComponent } from '../coordinator/edit-users/edit-users.component';
import { ListRegisterComponent } from '../coordinator/list-register/list-register.component';

const routes: Routes = [
  {
    children: [{ path: '', component: MenuComponent }],
    path: 'actividad-coordinador', component: CoordinatingActivityComponent,

  },
  { path: 'editar-actividad', component: EditComponent },
  { path: 'crear-recompensa', component: CreateRewardComponent },
  { path: 'editar-recompensa', component: EditRewardComponent },
  { path: 'perfil-coordinador', component: CoordinatorProfileComponent },
  { path: 'recompensa-coordinador', component: CoordinatorRewardComponent },
  { path: 'crear-actividad', component: CreateActivityComponent },
  { path: 'medallas-coordinador', component: MedalsCoordinatorComponent },
  { path: 'crear-medallas', component: CreateMedalsComponent },
  { path: 'editar-medallas', component: EditMedalsComponent },
  { path: 'notificaciones-coordinador', component:CoordinatorNotificationComponent},
  { path: 'crear-notificacion', component:CreateNotificationComponent},
  { path: 'editar-notificacion', component:EditNotificationComponent},
  { path: 'usuarios', component:UsersComponent},
  { path: 'registro', component:RegisterComponent},
  { path: 'dashboard-usuarios', component: DashboardUsersComponent},
  { path: 'editar-usuarios', component:EditUsersComponent},
  { path: 'lista-registrados', component:ListRegisterComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }
