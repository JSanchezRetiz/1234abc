import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginnRoutingModule } from './loginn-routing.module';
import { LoginComponent } from '../loginn/login/login.component';
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
import { AngularFireAuthModule } from "angularfire2/auth";
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';

import { environment } from '../../environments/environment';
import { AngularFireModule } from "angularfire2";

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoginService } from './service/login.service';
import { ForgetComponent } from './forget/forget.component';
import { MedalsComponent } from './medals/medals.component'

@NgModule({
  imports: [
    CommonModule,
    LoginnRoutingModule,
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
    //firebase
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    // external modules
    NgxChartsModule,
  ],
  declarations: [LoginComponent, ForgetComponent, MedalsComponent],
  providers: [LoginService],
})
export class LoginnModule { }
