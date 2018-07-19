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

import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';

import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { CoordinatingActivityComponent } from './coordinating-activity/coordinating-activity.component';
import { EditComponent } from './edit/edit.component';
import { CreateRewardComponent } from './create-reward/create-reward.component';
import { EditRewardComponent } from './edit-reward/edit-reward.component';

@NgModule({
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
    // material modules
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatToolbarModule,
    // covalent modules
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentLoadingModule,
  ],
  declarations: [CoordinatingActivityComponent, EditComponent, CreateRewardComponent, EditRewardComponent]
})
export class CoordinatorModule { }
