import { Component, OnInit, Inject } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { activityDto } from '../../challenges/models/activityDto';
import { CoordinatorService } from '../services/coordinator.service';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { TdLoadingService } from '@covalent/core/loading';
import { storeDto } from '../../challenges/models/storeDto';
import { medalDto } from '../../coordinator/models/medalDto';
import { scoreDto } from '../models/scoreDto';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [CoordinatorService, ChallengesService, TdLoadingService],
})
export class EditComponent implements OnInit {
  activitySend: activityDto;
  activity: any;
  id: any;
  startTime: Date;
  activityAll: any;
  storeSend: storeDto;
  store: any;
  medals: any;
  medalSend: medalDto;
  value: string;
  viewValue: string;
  fecha: Date
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  minDate2 = new Date(2000, 0, 1);
  maxDate2 = new Date(2020, 0, 1);
  scores: scoreDto[];
  score: scoreDto;
  


  constructor(private _loadingService: TdLoadingService, private challengesSVC: ChallengesService, @Inject(MAT_DIALOG_DATA) public data: any, private coordinatorSVC: CoordinatorService, private dialog: TdDialogService, public dialogRef: MatDialogRef<EditComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef) {
    this.activityAll = data.data;
    this.activity = data.activity;
    this.store = new Array<storeDto>();
    this.medals = new Array<medalDto>();
    this.activitySend = new activityDto();
    this.startTime = new Date();
    this.fecha = new Date();
    this.scores = new Array<scoreDto>();
    this.score = new scoreDto();

  }

  updateActivity() {
    console.log("update", this.activity);
    this._loadingService.register();
    this.activity.id
    this.coordinatorSVC.updateActivity(this.activity).then(res => {
      this.activity = res;
      console.log(this.activity);
      this.salir();
      this._loadingService.resolve();
    })
  }
  getAllItemsStore() {
    this.challengesSVC.getAllItemsStore().then(res => {
      this.store = res;
      console.log(this.store)
    })
  }
  getAllMedals() {
    this.coordinatorSVC.getAllMedals().then(res => {
      this.medals = res;
      console.log(res);
    })
  }
  salir() {
    this.dialog.openAlert({
      message: 'Se ha editado la actividad adecuadamente',
      disableClose: false, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      closeButton: 'Cerrar', //OPTIONAL, defaults to 'CLOSE'
      width: '400px', //OPTIONAL, defaults to 400px
    }).afterClosed().subscribe(
      result => {
        this.dialogRef.close();
      }
    );
    // this.dialogRef.close('cerrar');
  }
  cerrar() {
    this.dialogRef.close();
  }
  getTypeScore() {
    this.coordinatorSVC.getTypeOfScore().then(res => {
      this.score = res[0];
      console.log("dificultad",res)
    })


  }
  ngOnInit() {
    this.getAllMedals();
    this.getAllItemsStore();
    console.log("dto score", this.getTypeScore())

  }

}