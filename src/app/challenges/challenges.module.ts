import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { RankingComponent } from './ranking/ranking.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatMenuModule, MatButtonToggleModule,
  MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule,
  MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
  MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule, MatCheckboxModule, MatProgressBarModule, MatAccordion, MatExpansionModule,
} from '@angular/material';

import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { AngularFireAuthModule } from "angularfire2/auth";
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { MenuComponent } from '../menu/menu/menu.component';
import { environment } from '../../environments/environment';
import { AngularFireModule } from "angularfire2";
import { MenuModule}from '../menu/menu.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StoreComponent } from './store/store.component';
import { DetailActivitiesComponent } from './detail-activities/detail-activities.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { MyActivitiesComponent } from './my-activities/my-activities.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    CovalentDialogsModule ,
    ChallengesRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatProgressBarModule,
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
  declarations: [RankingComponent, ActivitiesComponent, StoreComponent, DetailActivitiesComponent, DetailArticleComponent, MyActivitiesComponent,]
})
export class ChallengesModule { }
