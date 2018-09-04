import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { myActivitiesDto } from '../../challenges/models/myActivitiesDto';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { CoordinatorService } from '../../coordinator/services/coordinator.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.scss'],
  providers: [ChallengesService, CoordinatorService],
})
export class ListRegisterComponent implements OnInit {
  myActivity: myActivitiesDto[];
  myActivitySend: any;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private _router: Router, private route: ActivatedRoute, private challengesSVC: ChallengesService, private coordinatorSvc: CoordinatorService, ) {
    this.myActivity = [];
    this.myActivitySend = data.dato;
    console.log("data", data)
  }

  getActivitysById() {
    console.log("datos traidos:", this.myActivitySend)
    this.myActivitySend.idActivity = localStorage.getItem('idActivity');
    console.log("id de la actividad",this.myActivitySend.idActivity)
    this.coordinatorSvc.getActivitiesById(this.myActivitySend).then(res => {
      this.myActivity = res;
  
      //console.log("resultado", this.myActivitySend);
    })
  }
  Volver() {
    this._router.navigate(["actividad-coordinador"]);
  }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.myActivity = JSON.parse(params["idActivity"]);
    //   console.log("dto", this.myActivity)

    // })
    this.getActivitysById();
  }

}
