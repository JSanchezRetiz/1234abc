import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { storeDto } from '../../challenges/models/storeDto';
import { CoordinatorService } from '../services/coordinator.service';

@Component({
  selector: 'app-create-reward',
  templateUrl: './create-reward.component.html',
  styleUrls: ['./create-reward.component.scss'],
  providers: [CoordinatorService],
})
export class CreateRewardComponent implements OnInit {
  files: any;
  disabled: boolean = false;
  public reward: any

  constructor(private dialog: TdDialogService, public dialogRef: MatDialogRef<CreateRewardComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef, private coordinatorSVC: CoordinatorService) { }
  toggleDisabled(): void {
    this.disabled = !this.disabled;
  
  }

  cerrar() {
    this.dialogRef.close('cerrar');
  }

  createReward() {
    console.log(this.reward);
     this.coordinatorSVC.newItemStore(this.reward).then(res => {
       this.reward = res;
     console.log(res);
    })

  }
  ngOnInit() {
    this.reward = new storeDto();
  }

}
