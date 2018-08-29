import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
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
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss'],
  providers: [ChallengesService, CoordinatorService, TdLoadingService, DatePipe,],
})

export class CreateActivityComponent implements OnInit {
  activity: activityDto;
  fecha1: Date;
  endTime: Date;
  store: storeDto[];
  value: string;
  viewValue: string;
  storeSend: storeDto;
  medals: medalDto[];
  medalSend: medalDto;
  score: scoreDto;
  day: any;
  dayFormat: Date;
  fecha:Date;

  constructor(private datePipe: DatePipe, private dialog: TdDialogService, public dialogRef: MatDialogRef<CreateActivityComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef, private _loadingService: TdLoadingService, private challengesSVC: ChallengesService, private coordinatorSVC: CoordinatorService) {
    this.activity = new activityDto();
    this.store = new Array<storeDto>();
    this.storeSend = new storeDto();
    this.medals = new Array<medalDto>();
    this.medalSend = new medalDto();
    this.score = new scoreDto();
    this.day = Date.now();
    this.dayFormat = new Date(this.day);
    console.log("dia de hoy", this.dayFormat);
    this.fecha = new Date();
  

    //  this.activity.startTime= new Date("")
  }

  createActivity() {
    this._loadingService.register();
    console.log("fecha final", this.activity.endTime);
    console.log("fecha inicial", this.activity.startTime);
    if (this.dayFormat < this.activity.startTime) {
      this.activity.status = "En proceso";
    } 
    if ( this.dayFormat >= this.activity.startTime && this.dayFormat<= this.activity.endTime ) {
      this.activity.status = "vigente";
    }
    else if (this.dayFormat > this.activity.endTime) {
     this.activity.status = "finalizado";
    }
    this.activity.name = "felipe";
    this.activity.idCoordinator = "idCoordinador";
    this.activity.typeScore = "typeScore";
    this.coordinatorSVC.createActivity(this.activity).then(res => {
      this.activity = res;
      console.log(res)
      this._loadingService.resolve();
      this.guardar();
    });
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
  cerrar() {
    this.dialogRef.close('cerrar');
  }
  guardar() {
    this.dialog.openAlert({
      message: 'Se ha creado la actividad adecuadamente',
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
  }
  getTypeScore() {
    this.coordinatorSVC.getTypeOfScore().then(res => {
      this.score = res[0];
      console.log(res)
    })
  }
  ngOnInit() {

    console.log("dto medals", this.getAllMedals())
    console.log("dto store", this.getAllItemsStore())
    console.log("dto score", this.getTypeScore())

    this.fecha1 = new Date();
    this.endTime = new Date()
  }
}