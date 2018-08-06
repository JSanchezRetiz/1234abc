import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';
import { ActivitiesComponent } from './activities/activities.component';
import { StoreComponent } from './store/store.component';
import { DetailActivitiesComponent } from './detail-activities/detail-activities.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { MenuComponent } from '../menu/menu/menu.component';
import { MyActivitiesComponent } from '../challenges/my-activities/my-activities.component';

const routes: Routes = [
  {
    path: 'ranking', component: MenuComponent,
    children: [{ path: '', component: RankingComponent }]
  },
  { path: 'actividades', component: ActivitiesComponent },
  { path: 'tienda', component: StoreComponent },
  { path: 'detalles-actividades', component: DetailActivitiesComponent },
  { path: 'detalles-articulo', component: DetailArticleComponent },
  { path: '', component: MenuComponent },
  { path: 'mis-actividades', component:MyActivitiesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengesRoutingModule { }
