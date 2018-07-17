import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { activityDto } from '../models/activityDto';
import {ChallengesService} from '../services/challenges.service';
import { ActivatedRoute, Params, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-detail-activities',
  templateUrl: './detail-activities.component.html',
  styleUrls: ['./detail-activities.component.scss'],
  providers: [TdDialogService,ChallengesService],
})
export class DetailActivitiesComponent implements OnInit {
activitySend:activityDto;
activity:activityDto;

  constructor(private dialog:TdDialogService, public dialogRef:MatDialogRef<DetailActivitiesComponent>, private challengesSVC:ChallengesService,private _router: Router,private route: ActivatedRoute, private _viewContainerRef: ViewContainerRef) {
    this.activitySend= new activityDto();
    this.activity= new activityDto();
   }

   Participar(): void {
    this.dialog.openAlert({
      message: 'Ahora estas participando en esta actividad. ¡buena suerte!',
      disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      closeButton: 'Cerrar', //OPTIONAL, defaults to 'CLOSE'
      width: '400px', //OPTIONAL, defaults to 400px
    });
  }


  cerrar(){
    this.dialogRef.close('cerrar');
  }
getActivity(id:string){
  
this.activitySend.id= id

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
