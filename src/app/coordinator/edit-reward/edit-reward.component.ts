import { Component, OnInit, Inject } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { storeDto } from '../../challenges/models/storeDto';
import { CoordinatorService } from '../services/coordinator.service';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'app-edit-reward',
  templateUrl: './edit-reward.component.html',
  styleUrls: ['./edit-reward.component.scss'],
  providers: [CoordinatorService, ChallengesService, TdLoadingService],
})
export class EditRewardComponent implements OnInit {
  files: any;
  disabled: boolean = false;
  public reward: any
  tiendaSend: storeDto;
  tienda: storeDto;
  idItem: any;


  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private _loadingService: TdLoadingService, private challengeSVC: ChallengesService, private dialog: TdDialogService, public dialogRef: MatDialogRef<EditRewardComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef, private coordinatorSVC: CoordinatorService) {
    this.idItem = data.data;
    this.tiendaSend = new storeDto();
    this.tienda = new storeDto();
    console.log(data)
    console.log(this.idItem);
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  cerrar() {
    this.dialog.openAlert({
      message: 'Se ha editado la recompensa adecuadamente',
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

  createReward() {
    this._loadingService.register();
    console.log(this.reward);
    this.coordinatorSVC.newItemStore(this.reward).then(res => {
      this.reward = res;
      this._loadingService.resolve();
      this.cerrar();
    })
  }

  updateItemStore() {
    this._loadingService.register();
    this.tienda.itemId
    console.log("dto", this.tienda)
    this.coordinatorSVC.updateItemStore(this.tienda).then(res => {
      this.tienda = res;
      this.cerrar();
      console.log(this.tienda)
      this._loadingService.resolve();
    })
  }

  getItemById(tiendaSend: storeDto) {
    this.challengeSVC.getItemById(tiendaSend).then(res => {
      this.tienda = res;
      console.log(this.tienda)
    })
  }

  ngOnInit() {
    this.reward = new storeDto();
    this.tienda.itemId = localStorage.getItem('itemId');
    this.getItemById(this.tienda);

    
  }

}
