import { Component, OnInit, Inject } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { activityDto } from '../models/activityDto';
import { ChallengesService } from '../services/challenges.service';
import { ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { uidDto } from '../../login/models/uidDto';
import { scoreActivity } from '../models/scoreActivity';
import { myActivitiesDto } from '../models/myActivitiesDto';


@Component({
  selector: 'app-detail-activities',
  templateUrl: './detail-activities.component.html',
  styleUrls: ['./detail-activities.component.scss'],
  providers: [TdDialogService, ChallengesService],
})
export class DetailActivitiesComponent implements OnInit {
  activitySend: activityDto;
  activity: activityDto;
  score: scoreActivity;
  myActivity: myActivitiesDto;
  uid: uidDto;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: TdDialogService, public dialogRef: MatDialogRef<DetailActivitiesComponent>, private challengesSVC: ChallengesService, private _router: Router, private route: ActivatedRoute, private _viewContainerRef: ViewContainerRef) {
    this.activitySend = new activityDto();
    this.activity = data.data;
    this.score = new scoreActivity();
    this.myActivity = new myActivitiesDto();
    this.uid = new uidDto();
    console.log("data", data)
    console.log("data", this.activity.id)

  }

  Registrar(): void {

    this.dialog.openAlert({
      message: 'Te has registrado exitosamente en esta actividad.',
      disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      closeButton: 'Cerrar', //OPTIONAL, defaults to 'CLOSE'
      width: '400px', //OPTIONAL, defaults to 400px
    }).afterClosed().subscribe(
      result => {
        this.dialogRef.close();
        this.saveActivity();

      })
  };

  saveActivity() {
    this.myActivity.uid = localStorage.getItem('uid');
    // this.myActivity.id= this.activitySend.id;
    // this.myActivity.title= this.activity.title;
    // this.myActivity.description= this.activity.description;
    // this.myActivity.reward= this.activity.reward;
    // this.myActivity.prize= this.activity.prize;
    // this.myActivity.medal= this.activity.medal;
    // this.myActivity.rules= this.activity.rules;
    // this.myActivity.creationTime= this.activity.creationTime;
    // this.myActivity.endTime= this.activity.endTime;
    // this.myActivity.idCoordinator= this.activity.idCoordinator;
    // this.myActivity.name= this.activity.name;
    // this.myActivity.status= this.activity.status;
    // this.myActivity.typeScore= this.activity.typeScore;
    // this.myActivity.startTime= this.activity.startTime;

    this.challengesSVC.saveActivity(this.myActivity).then(res => {
      this.myActivity = res;
    })

let NavigationExtras: NavigationExtras = {
  queryParams:{
    "myActivitys": JSON.stringify(this.myActivity),
  }
};this._router.navigate(["mis-actividades"],NavigationExtras)

  }

  cerrar() {
    this.dialogRef.close('cerrar');
  }
  getActivity(id: string) {
    this.activitySend.id = id
    this.challengesSVC.getActivity(this.activitySend).then(res => {
      this.activity = res;
      console.log("RESPUESTA SVC GET ACTIVITY" + this.activity.title);
      this.score.activityName = this.activity.title;
    })
  }
  ngOnInit() {
    var id = localStorage.getItem('idActivity');
    var uid = localStorage.getItem('uid');
    var name = localStorage.getItem('userName');
    var score = 8;
    var experience = 10;

    this.getActivity(id);
    this.score.activityId = id;
    this.score.uid = uid;
    this.score.userName = name;
    this.score.score = score;
    this.score.experience = experience;

    console.log("actividad: " + this.score.activityName)
    //console.log(this.score.activityName);
  }
  registerScore() {

    this.challengesSVC.registerScore(this.score).then(res => {
      //res;
      console.log("mensaje", res);
    })
  }
}