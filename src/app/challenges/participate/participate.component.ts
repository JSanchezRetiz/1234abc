import { Component, OnInit, Inject } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { activityDto } from '../models/activityDto';
import { ChallengesService } from '../services/challenges.service';
import { scoreActivity } from '../models/scoreActivity';
import { myActivitiesDto } from '../models/myActivitiesDto';


@Component({
  selector: 'app-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.scss'],
  providers: [TdDialogService, ChallengesService],
})
export class ParticipateComponent implements OnInit {
  myactivitySend: activityDto;
  myActivity: myActivitiesDto;
  score: scoreActivity;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: TdDialogService, public dialogRef: MatDialogRef<ParticipateComponent>, private challengesSVC: ChallengesService, private _router: Router, private _viewContainerRef: ViewContainerRef) {
    this.myactivitySend = new myActivitiesDto();
    this.myActivity = data.myActivity;
    console.log("data",data)
    this.score = new scoreActivity();
   }

   Participar(): void {
    this.registerScore();
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


      })
  };

  cerrar() {
    this.dialogRef.close('cerrar');
  }

  registerScore() {

    this.challengesSVC.registerScore(this.score).then(res => {
      //res;
      console.log("mensaje", res);
    })
  }

  ngOnInit() {
  }

}
