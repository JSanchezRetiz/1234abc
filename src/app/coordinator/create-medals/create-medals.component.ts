import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CoordinatorService } from '../services/coordinator.service';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { TdLoadingService } from '@covalent/core/loading';
import { medalDto } from '../models/medalDto';

@Component({
  selector: 'app-create-medals',
  templateUrl: './create-medals.component.html',
  styleUrls: ['./create-medals.component.scss'],
  providers: [ChallengesService, CoordinatorService, TdLoadingService,TdDialogService],
})

export class CreateMedalsComponent implements OnInit {
  medals: medalDto;

  constructor(private dialog: TdDialogService, public dialogRef: MatDialogRef<CreateMedalsComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef, private _loadingService: TdLoadingService, private challengesSVC: ChallengesService, private coordinatorSVC: CoordinatorService) {
    this.medals = new medalDto();
  }

  createMedal() {
    this._loadingService.register();
    this.coordinatorSVC.createMedal(this.medals).then(res => {
      this.medals = res;
      console.log(res);
      this._loadingService.resolve();
      this.guardar();
    })
  }

  cerrar() {
    this.dialogRef.close('cerrar');
  }

  guardar() {
    this.dialog.openAlert({
      message: 'Se ha creado la medalla adecuadamente',
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

  ngOnInit() {
  }
  
}