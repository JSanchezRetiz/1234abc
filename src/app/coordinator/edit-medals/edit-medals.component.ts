import { Component, OnInit, Inject } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { medalDto } from '../models/medalDto';
import { CoordinatorService } from '../services/coordinator.service';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'app-edit-medals',
  templateUrl: './edit-medals.component.html',
  styleUrls: ['./edit-medals.component.scss'],
  providers: [CoordinatorService, ChallengesService, TdLoadingService],
})
export class EditMedalsComponent implements OnInit {
  medalSend: medalDto;
  medal: medalDto;
  id: any;


  constructor(private _loadingService: TdLoadingService, private challengesSVC: ChallengesService, @Inject(MAT_DIALOG_DATA) public data: any, private coordinatorSVC: CoordinatorService, private dialog: TdDialogService, public dialogRef: MatDialogRef<EditMedalsComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef) {
    this.medal = data.data;
    this.medalSend = new medalDto();
    /* this.medal = new medalDto(); */
    console.log(this.medal)
    // this.getMedalById(this.medalSend);
    this.medal.id = localStorage.getItem('id');
    console.log(this.medal)
  }

  updateMedal() {
    this._loadingService.register();
    this.medal.id
    this.coordinatorSVC.updateMedal(this.medal).then(res => {
      this.medal = res;
      console.log(this.medal);
      this.salir();
      this._loadingService.resolve();
    })
  }

  salir() {
    this.dialog.openAlert({
      message: 'Se ha editado la medalla adecuadamente',
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
