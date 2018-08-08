import { Component, OnInit } from '@angular/core';
import { myActivitiesDto } from '../models/myActivitiesDto';
import { userDto } from '../../login/models/userDto';
import { ChallengesService } from '../services/challenges.service';
import { CoordinatorService } from '../../coordinator/services/coordinator.service';
import { activityDto } from '../models/activityDto';
import { uidDto } from '../../login/models/uidDto';
import {Router, ActivatedRoute, Params, NavigationExtras} from '@angular/router';
import { TdLoadingService } from '@covalent/core/loading';
import { LoginService } from '../../login/service/login.service';


@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.scss'],
  providers: [ChallengesService, CoordinatorService,TdLoadingService, LoginService]
})
export class MyActivitiesComponent implements OnInit {
  uidDto: uidDto;
  userDto: userDto;
activity:activityDto[];
myActivity:myActivitiesDto[];
myActivitySend:myActivitiesDto;
uid:userDto;
  constructor( private loginSVC: LoginService, private _loadingService: TdLoadingService,private route:ActivatedRoute, private challengesSVC:ChallengesService, private coordinatorSVC:CoordinatorService) { 
    this.activity = new Array <activityDto>();
  
  this.myActivitySend= new myActivitiesDto();
  this.uid= new userDto();
  this.userDto = new userDto();

  this.uidDto = new uidDto();

  }

  getMyActivities(){
    
    console.log("datos traidos:",this.myActivitySend)
    this.challengesSVC.getMyActivities(this.myActivitySend).then(res =>{
      
      this.myActivity=res;
      console.log(res);
    })
  }
  ngOnInit() {
      this.route.queryParams.subscribe(params=>{
      this.myActivitySend = JSON.parse(params["myActivitys"]);
    })
    this.getMyActivities()
    this.getUserData();
  }

  getUserData() {
    this._loadingService.register();
    this.uidDto.id = localStorage.getItem('uid');
    this.loginSVC.getUserData(this.uidDto).then(res => {
      this.userDto = res;
      this._loadingService.resolve();
      this._loadingService.resolve();
      console.log(this.userDto.name, this.userDto.lastname, this.userDto.experience);
    })
  }

}
