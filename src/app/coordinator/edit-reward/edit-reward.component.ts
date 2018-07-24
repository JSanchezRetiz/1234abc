import { Component, OnInit, Inject } from '@angular/core';
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
  tiendaSend: storeDto;
  tienda: storeDto;
  idItem:any;
  

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private challengeSVC: ChallengesService, private dialog: TdDialogService, public dialogRef: MatDialogRef<EditRewardComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef, private coordinatorSVC: CoordinatorService) {
    this.idItem= data.data;
    this.tiendaSend = new storeDto();
    this.tienda = new storeDto();
    console.log(data)
    console.log(this.idItem);
   }

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

  getItemById(tiendaSend:storeDto){
    this.challengeSVC.getItemById(tiendaSend).then(res => {
      this.tienda =res;
      console.log(this.tienda)
    })
  }



  ngOnInit() {
    this.reward = new storeDto();
    this.tiendaSend.itemId = localStorage.getItem('itemId');
 
    this.getItemById(this.tiendaSend);
  }

}
