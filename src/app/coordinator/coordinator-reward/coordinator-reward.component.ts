import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdLoadingService } from '@covalent/core/loading';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { CreateRewardComponent } from '../create-reward/create-reward.component';
import { storeDto } from '../../challenges/models/storeDto';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { EditRewardComponent } from '../edit-reward/edit-reward.component';
import { CoordinatorService } from '../services/coordinator.service';

@Component({
  selector: 'app-coordinator-reward',
  templateUrl: './coordinator-reward.component.html',
  styleUrls: ['./coordinator-reward.component.scss'],
  providers: [ChallengesService, TdDialogService, CoordinatorService, TdLoadingService]
})
export class CoordinatorRewardComponent implements OnInit {

  reward: storeDto;
  store: storeDto[];
  storeSend: storeDto;
  constructor(private _loadingService: TdLoadingService, private _router: Router, private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private _dialogRef: MatDialog, private challengesSVC: ChallengesService, private coordinatorSVC: CoordinatorService) {
    this.reward = new storeDto();
    this.store = new Array<storeDto>();
    this.storeSend = new storeDto();
  }
  eliminar(dato: storeDto) {
    this._loadingService.register();
    console.log("id", dato.itemId)
    localStorage.setItem('itemId', dato.itemId);
    this.coordinatorSVC.deleteItemStore(dato).then(res => {
      this.getAllItemsStore();
      this._loadingService.resolve();
    })
  }
  Confirmar(dato:storeDto): void {
    this._dialogService.openConfirm({
      message: 'Esta seguro de eliminar esta medalla?',
     disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
       title: 'Atencion:', //OPTIONAL, hides if not provided
      cancelButton: 'Cancelar', //OPTIONAL, defaults to 'CANCEL'
      acceptButton: 'Confirmar', //OPTIONAL, defaults to 'ACCEPT'
      width: '500px', //OPTIONAL, defaults to 400px
     }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
         this.eliminar(dato)
      } else {
        this.cerrar();
      }
    });
   }
   cerrar() {
    this._dialogRef.closeAll();
  }
  
  getAllItemsStore() {
    this.challengesSVC.getAllItemsStore().then(res => {
      this.store = res;
      console.log(this.store)
    })
  }

  crear() {
    const dialogRef = this._dialogRef.open(CreateRewardComponent, {
      width: '1000px',
      height: '600px',
      data: { data: 'dato' }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllItemsStore();

    });
  }

  editar(dato: storeDto) {
    console.log("id", dato.itemId)
    localStorage.setItem('itemId', dato.itemId);
    const dialogRef = this._dialogRef.open(EditRewardComponent, {
      width: '1000px',
      height: '600px',
      data: { data: dato.itemId }
    });
    dialogRef.afterClosed().subscribe(result => {
      this._loadingService.register();
      this.getAllItemsStore();
      this._loadingService.resolve();

    });
  }

  ngOnInit() {
    this.getAllItemsStore()
  }
}
