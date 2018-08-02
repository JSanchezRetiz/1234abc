import { Component, OnInit , Inject} from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { activityDto } from '../../challenges/models/activityDto';
import { CoordinatorService } from '../services/coordinator.service';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { TdLoadingService } from '@covalent/core/loading';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [CoordinatorService, ChallengesService, TdLoadingService],
})
export class EditComponent implements OnInit {
activitySend: activityDto;
activity: activityDto;
id: any;
startTime:Date;
fecha :Date
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  minDate2 = new Date(2000, 0, 1);
  maxDate2 = new Date(2020, 0, 1);
  constructor(private _loadingService: TdLoadingService, private challengesSVC: ChallengesService, @Inject(MAT_DIALOG_DATA) public data: any, private coordinatorSVC: CoordinatorService, private dialog:TdDialogService, public dialogRef:MatDialogRef<EditComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef) { 
    this.activity = data.data;
    this.activitySend = new activityDto();
    console.log(this.activity)
    this.activity.id = localStorage.getItem('id');
    console.log(this.activity)
    this.startTime = new Date();
    console.log(this.startTime);
    this.fecha= new Date();

  }

  updateActivity() {
    this._loadingService.register();
    this.activity.id
    this.coordinatorSVC.updateActivity(this.activity).then(res => {
      this.activity = res;
      console.log(this.activity);
      this.salir();
      this._loadingService.resolve();
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
  cerrar(){
    this.dialogRef.close();
  }

  ngOnInit() {
   
  }

}