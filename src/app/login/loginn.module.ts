import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginnRoutingModule } from './loginn-routing.module';
import { LoginComponent } from '../login/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';

import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { AngularFireAuthModule } from "angularfire2/auth";
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';

import { environment } from '../../environments/environment';
import { AngularFireModule } from "angularfire2";

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoginService } from './service/login.service';
import { ForgetComponent } from './forget/forget.component';
import { MedalsComponent } from './medals/medals.component';
import { RegisterComponent } from './register/register.component';

import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';

@NgModule({
  imports: [
    CommonModule,
    LoginnRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    // covalent modules
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentLoadingModule,
    CovalentExpansionPanelModule,
    //firebase
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    // external modules
    NgxChartsModule,
  ],
  declarations: [LoginComponent, ForgetComponent, MedalsComponent, RegisterComponent, HomeComponent, NotificationsComponent],
  providers: [LoginService],
})
export class LoginnModule { }
