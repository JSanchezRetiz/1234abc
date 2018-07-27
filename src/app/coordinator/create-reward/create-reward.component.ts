import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { storeDto } from '../../challenges/models/storeDto';
import { CoordinatorService } from '../services/coordinator.service';
import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'app-create-reward',
  templateUrl: './create-reward.component.html',
  styleUrls: ['./create-reward.component.scss'],
  providers: [CoordinatorService, TdLoadingService],
})
export class CreateRewardComponent implements OnInit {
  files: any;
  disabled: boolean = false;
  public reward: any

  constructor(private _loadingService: TdLoadingService, private dialog: TdDialogService, public dialogRef: MatDialogRef<CreateRewardComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef, private coordinatorSVC: CoordinatorService) { }
  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }
  cerrarModal(){
    this.dialogRef.close('cerrar');
  }
  cerrar() {

    this.dialog.openAlert({
      message: 'Se ha creado la recompensa adecuadamente',
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
    // this.dialogRef.close('cerrar');
  }

  createReward() {
    this._loadingService.register();
    console.log(this.reward);
    this.coordinatorSVC.newItemStore(this.reward).then(res => {
      this.reward = res;
      this._loadingService.resolve();
      this.cerrar();
    });
   
  }
  ngOnInit() {
    this.reward = new storeDto();
  }

}
