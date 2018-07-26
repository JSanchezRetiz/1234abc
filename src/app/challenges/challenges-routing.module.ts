import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';
import { ActivitiesComponent } from './activities/activities.component';
import { StoreComponent } from './store/store.component';
import { DetailActivitiesComponent } from './detail-activities/detail-activities.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import {MainComponent} from  '../main.component';
 
const routes: Routes = [
  { path:'ranking', component:RankingComponent},
  { path:'actividades', component:ActivitiesComponent},
  { path:'tienda', component:StoreComponent},
  { path:'detalles-actividades', component:DetailActivitiesComponent},
  { path:'detalles-articulo', component:DetailArticleComponent},
  { path:'crear-actividad', component:CreateActivityComponent},
  { path:'', component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengesRoutingModule { }
