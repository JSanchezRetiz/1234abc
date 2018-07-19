import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { activitiesScoreDto } from '../models/activitiesScoreDto';
import { ChallengesService } from '../services/challenges.service';
import { ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { activityDto } from '../models/activityDto';
import { TdLoadingService } from '@covalent/core/loading';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  providers: [ChallengesService, TdLoadingService],
})
export class RankingComponent implements OnInit {
  activitiesScore: activitiesScoreDto[];
  activity: activityDto;
  activityScoreSend: activitiesScoreDto;
  constructor(private _router: Router, private challengesSvc: ChallengesService, private route: ActivatedRoute, private loadingService: TdLoadingService) {
    this.activitiesScore = new Array<activitiesScoreDto>();
    this.activityScoreSend = new activitiesScoreDto();
    this.activity = new activityDto();
  }

  Volver() {
    this._router.navigate(["actividades"]);
  }
  getAllScoreByActivity(activity: activityDto) {
    this.loadingService.register();
    this.activityScoreSend.activityId = activity.id;
    this.challengesSvc.getAllScoreByActivity(this.activityScoreSend).then(res => {
      this.activitiesScore = res;
      this.loadingService.resolve();
      console.log(res);
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.activity = JSON.parse(params["activities"]);
      console.log(this.activity);
      this.getAllScoreByActivity(this.activity);
    });
  }

}
