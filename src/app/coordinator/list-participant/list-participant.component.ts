import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { myActivitiesDto } from '../../challenges/models/myActivitiesDto';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { CoordinatorService } from '../../coordinator/services/coordinator.service';

import { activitiesScoreDto } from '../../challenges/models/activitiesScoreDto';

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.scss'],
  providers: [ChallengesService, CoordinatorService],
})
export class ListParticipantComponent implements OnInit {
  participants: activitiesScoreDto[];
  checkArray = [];
  participantSend:activitiesScoreDto;
  disabled = false;

  constructor( private _router: Router, private route: ActivatedRoute, private challengesSVC: ChallengesService, private coordinatorSvc: CoordinatorService, ) {
  this.participantSend = new activitiesScoreDto();
  console.log(this.participantSend)
  }

  getAllParticipatingUsers(){
    this.coordinatorSvc.getAllParticipatingUsers().then(res => {
      this.participants = res;
      for(let i=0;i<=this.participants.length;i++){
        this.checkArray.push(false);
      }
      console.log(res)
    })

  }

  Volver() {
    this._router.navigate(["actividad-coordinador"]);
  }

  ngOnInit() {
    this.getAllParticipatingUsers();
  }

  disableControl(i) {
    this.checkArray[i] = true;
  }

}
