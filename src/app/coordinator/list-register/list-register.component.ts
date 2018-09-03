import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { myActivitiesDto } from '../../challenges/models/myActivitiesDto';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { CoordinatorService } from '../../coordinator/services/coordinator.service';
@Component({
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.scss'],
  providers: [ChallengesService,CoordinatorService],
})
export class ListRegisterComponent implements OnInit {
  myActivity: myActivitiesDto[];
  myActivitySend:myActivitiesDto
  constructor(private _router: Router, private route: ActivatedRoute, private challengesSVC: ChallengesService, private coordinatorSvc: CoordinatorService, ) {
    this.myActivitySend = new myActivitiesDto();
  }

  getActivitysById(){
    this.coordinatorSvc.getActivityById(this.myActivitySend).then(res=>{
      this.myActivity=res;
      console.log("resultado",res);
    })
  }
  Volver() {
    this._router.navigate(["actividad-coordinador"]);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.myActivity = JSON.parse(params["idActivity"]);
      console.log("dto", this.myActivity)
    
    })
this.getActivitysById();
  }

}
