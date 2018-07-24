import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdLoadingService } from '@covalent/core/loading';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { CreateRewardComponent } from '../create-reward/create-reward.component';
import{ storeDto } from '../../challenges/models/storeDto';
import {ChallengesService} from '../../challenges/services/challenges.service';

@Component({
  selector: 'app-coordinator-reward',
  templateUrl: './coordinator-reward.component.html',
  styleUrls: ['./coordinator-reward.component.scss'],
  providers:[ChallengesService]
})
export class CoordinatorRewardComponent implements OnInit {
reward:storeDto;
store: storeDto[];
  constructor(private _router: Router,private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private _dialogRef: MatDialog,private challengesSVC: ChallengesService) {
    this.reward= new storeDto();
    this.store = new Array<storeDto>();
   }

  eliminar(): void {
    this._dialogService.openAlert({
      message: '¿Desea eliminar esta actividad?.',
      disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      closeButton: 'Cerrar', //OPTIONAL, defaults to 'CLOSE'
      width: '400px', //OPTIONAL, defaults to 400px
    });
  }
  getAllItemsStore() {

    this.challengesSVC.getAllItemsStore().then(res => {
      this.store = res;

      console.log(this.store)
    })
  }

  crear(reward:storeDto) {
    console.log(reward)
    const dialogRef = this._dialogRef.open(CreateRewardComponent, {
      width: '1000px',
      height: '600px',
      data: { data: reward }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });
  }

  ngOnInit() {
    this.getAllItemsStore()
  }

}
