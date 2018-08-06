import { Component, OnInit } from '@angular/core';
import { myActivitiesDto } from '../models/myActivitiesDto';
import { userDto } from '../../login/models/userDto';
import { ChallengesService } from '../services/challenges.service';
import { CoordinatorService } from '../../coordinator/services/coordinator.service';
import { activityDto } from '../models/activityDto';


@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.scss'],
  providers: [ChallengesService, CoordinatorService]
})
export class MyActivitiesComponent implements OnInit {
activity:activityDto[];
idUsers:userDto;
  constructor(private challengesSVC:ChallengesService, private coordinatorSVC:CoordinatorService) { 
    this.activity = new Array <activityDto>();
    this.idUsers = new userDto();

  }

  getMyActivities(){
    this.challengesSVC.getMyActivities(this.idUsers).then(res =>{
      this.activity=res;
      console.log(res);
    })
  }
  ngOnInit() {
    this.getMyActivities()
  }

}
