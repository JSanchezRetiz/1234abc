import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengesRoutingModule } from './challenges-routing.module';
import { RankingComponent } from './ranking/ranking.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
  imports: [
    CommonModule,
    ChallengesRoutingModule
  ],
  declarations: [RankingComponent, ActivitiesComponent]
})
export class ChallengesModule { }
