import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { storeDto } from '../../challenges/models/storeDto';
import { CoordinatorService } from '../services/coordinator.service';
import { ChallengesService } from '../../challenges/services/challenges.service';

@Component({
  selector: 'app-edit-reward',
  templateUrl: './edit-reward.component.html',
  styleUrls: ['./edit-reward.component.scss'],
  providers: [CoordinatorService, ChallengesService],
})
export class EditRewardComponent implements OnInit {
  files: any;
  disabled: boolean = false;
  public reward: any
  store: storeDto;

  constructor(private challengeSVC: ChallengesService, private dialog: TdDialogService, public dialogRef: MatDialogRef<EditRewardComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef, private coordinatorSVC: CoordinatorService) { }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
    this.store= new storeDto();
  
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

  getItemById(store:storeDto){
    this.challengeSVC.getItemById(store).then(res => {
      this.store =res;
    })
  }



  ngOnInit() {
    this.reward = new storeDto();
  
    this.getItemById(this.store);
  }

}
