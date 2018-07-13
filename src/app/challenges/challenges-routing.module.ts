import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';
import { ActivitiesComponent } from './activities/activities.component';
import { StoreComponent } from './store/store.component';
import { DetailActivitiesComponent } from './detail-activities/detail-activities.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
 
const routes: Routes = [
  { path:'ranking', component:RankingComponent},
  { path:'actividades', component:ActivitiesComponent},
  { path:'tienda', component:StoreComponent},
  { path:'detalles-actividades', component:DetailActivitiesComponent},
  { path:'detalles-articulo', component:DetailArticleComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengesRoutingModule { }
