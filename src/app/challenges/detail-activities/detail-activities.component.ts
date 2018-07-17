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
  score:scoreActivity;
  constructor(private dialog: TdDialogService, public dialogRef: MatDialogRef<DetailActivitiesComponent>, private challengesSVC: ChallengesService, private _router: Router, private route: ActivatedRoute) {
    this.activitySend = new activityDto();
    this.activity = new activityDto();
    this.score= new scoreActivity();
  }
  cerrar() {
    this.dialogRef.close('cerrar');
  }
  getActivity(id: string) {
    this.activitySend.id = id
    this.challengesSVC.getActivity(this.activitySend).then(res => {
      this.activity = res;
      console.log("mensaje", res.name);
    })
  }
  ngOnInit() {
    var id = localStorage.getItem('idActivity');
    var uid= localStorage.getItem('uid')
    this.getActivity(id);
    this.registerScore(this.score)
  }
  registerScore(score:scoreActivity) {
    this.challengesSVC.registerScore(score).then(res =>{
      score=res;
      console.log("mensaje", res);
    })

  }
}
