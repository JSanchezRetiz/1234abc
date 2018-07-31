import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { activityDto } from '../../challenges/models/activityDto';
import { CoordinatorService } from '../services/coordinator.service';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { TdLoadingService } from '@covalent/core/loading';



@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss'],
  providers: [ChallengesService,CoordinatorService,TdLoadingService],

})
export class CreateActivityComponent implements OnInit {
activity: activityDto;
fecha1:Date;
endTime:Date;

  constructor(private dialog: TdDialogService, public dialogRef: MatDialogRef<CreateActivityComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef,private _loadingService:TdLoadingService, private challengesSVC:ChallengesService, private coordinatorSVC:CoordinatorService) {
this.activity= new activityDto();

   }

 
   createActivity() {
    this._loadingService.register();
    console.log(this.activity);
    this.activity.status=true;
    this.activity.name= "felipe";
    this.activity.idCoordinator="idCoordinador";
    this.activity.typeScore="typeScore";

    this.coordinatorSVC.createActivity(this.activity).then(res => {
      this.activity = res;
      this._loadingService.resolve();
      this.guardar();
    });
   
  }

cerrar(){
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
      result=>{
        this.dialogRef.close();
      }
    );

 

}
ngOnInit() {
  this.fecha1= new Date();
  this.endTime= new Date();
}
}