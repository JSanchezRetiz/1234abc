import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { activityDto } from '../models/activityDto';
import { ChallengesService } from '../services/challenges.service';
import { ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { uidDto } from '../../login/models/uidDto';
import { scoreActivity } from '../models/scoreActivity';


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


  constructor(private dialog: TdDialogService, public dialogRef: MatDialogRef<DetailActivitiesComponent>, private challengesSVC: ChallengesService, private _router: Router, private route: ActivatedRoute, private _viewContainerRef: ViewContainerRef) {
    this.activitySend = new activityDto();
    this.activity = new activityDto();
    this.score = new scoreActivity();
  


  }

  Participar(): void {
    this.registerScore();
    this.dialog.openAlert({
      message: 'Ahora estas participando en esta actividad. ¡buena suerte!',
      disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      closeButton: 'Cerrar', //OPTIONAL, defaults to 'CLOSE'
      width: '400px', //OPTIONAL, defaults to 400px
    }).afterClosed().subscribe(
      result => {
        this.dialogRef.close();
  
  })
};



  cerrar() {
    this.dialogRef.close('cerrar');
  }
  getActivity(id: string) {
    this.activitySend.id = id
    this.challengesSVC.getActivity(this.activitySend).then(res => {
      this.activity = res;
     console.log("RESPUESTA SVC GET ACTIVITY"+this.activity.title);
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
    
    console.log("actividad: "+this.score.activityName)
    //console.log(this.score.activityName);
  }
  registerScore() {

    this.challengesSVC.registerScore(this.score).then(res => {
      //res;
      console.log("mensaje", res);
    })
  }
}