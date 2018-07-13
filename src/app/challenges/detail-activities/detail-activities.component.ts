import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { activityDto } from '../models/activityDto';
import {ChallengesService} from '../services/challenges.service';

@Component({
  selector: 'app-detail-activities',
  templateUrl: './detail-activities.component.html',
  styleUrls: ['./detail-activities.component.scss'],
  providers: [TdDialogService,ChallengesService],
})
export class DetailActivitiesComponent implements OnInit {
activitySend:activityDto;
activity:activityDto;

  constructor(private dialog:TdDialogService, public dialogRef:MatDialogRef<DetailActivitiesComponent>, private challengesSVC:ChallengesService) {
    this.activitySend= new activityDto();
    this.activity= new activityDto();
   }


  cerrar(){
    this.dialogRef.close('cerrar');
  }
getActivity(id:string){
  alert("mensaje"+id);
this.activitySend.id= id
alert("mensaje"+id);
this.challengesSVC.getActivity(this.activitySend).then(res=>{
  this.activity= res;
  console.log("mensaje",res.name);
})
}
  ngOnInit() {
var id= localStorage.getItem('idActivity');
   this.getActivity(id);
  }

}
