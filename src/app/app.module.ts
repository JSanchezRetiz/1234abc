import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginnRoutingModule } from './login/loginn-routing.module';
import { LoginnModule } from './login/loginn.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfileRoutingModule } from './profile/profile-routing.module';
import { ProfileModule } from './profile/profile.module';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { ChallengesModule } from './challenges/challenges.module';
import { CoordinatorModule } from './coordinator/coordinator.module';
import { CoordinatorRoutingModule } from './coordinator/coordinator-routing.module';

import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { RequestInterceptor } from '../config/interceptors/request.interceptor';
import { MOCK_API } from '../config/api.config';

import { USER_PROVIDER, USERS_API } from './users';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialog } from '@angular/material/dialog';

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

export function getAPI(): string {
  return MOCK_API;
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

    DashboardComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    // MODULES
    ChallengesModule,

    // angular modules
    CommonModule,
    ProfileRoutingModule,
    ProfileModule,
    LoginnModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    LoginnRoutingModule,
    CoordinatorModule,
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
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    // external modules
    NgxChartsModule,
    // routes
    appRoutes,
  ], // modules needed to run this module
  providers: [
    LoginnRoutingModule,
    ProfileRoutingModule,
    httpInterceptorProviders,
    Title, {
      provide: USERS_API, useFactory: getAPI,
    }, USER_PROVIDER,
  ], // additional providers needed for this module
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
