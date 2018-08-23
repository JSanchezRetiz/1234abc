import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentLoadingModule } from '@covalent/core/loading';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import {MatSelectModule} from '@angular/material';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentFileModule } from '@covalent/core/file';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { CoordinatingActivityComponent } from './coordinating-activity/coordinating-activity.component';
import { EditComponent } from './edit/edit.component';
import { CreateRewardComponent } from './create-reward/create-reward.component';
import { EditRewardComponent } from './edit-reward/edit-reward.component';
import { CoordinatorProfileComponent } from './coordinator-profile/coordinator-profile.component';
import { CoordinatorRewardComponent } from './coordinator-reward/coordinator-reward.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { MenuModule}from '../menu/menu.module';
import { MedalsCoordinatorComponent } from './medals-coordinator/medals-coordinator.component';
import { CreateMedalsComponent } from './create-medals/create-medals.component';
import { EditMedalsComponent } from './edit-medals/edit-medals.component';
import { CoordinatorNotificationComponent } from './coordinator-notification/coordinator-notification.component';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { EditNotificationComponent } from './edit-notification/edit-notification.component';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    CoordinatorRoutingModule,
    MenuModule,
    ChartsModule,
    // material modules
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    // covalent modules
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentLoadingModule,
    CovalentFileModule,
    CovalentDialogsModule,
  ],
  declarations: [CoordinatingActivityComponent, EditComponent, CreateRewardComponent, EditRewardComponent,CoordinatorProfileComponent,CoordinatorProfileComponent, CoordinatorRewardComponent, CreateActivityComponent, MedalsCoordinatorComponent, CreateMedalsComponent, EditMedalsComponent, CoordinatorNotificationComponent, CreateNotificationComponent, EditNotificationComponent, DashboardUsersComponent],
})
export class CoordinatorModule { }
