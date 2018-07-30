import { Component, OnInit,Inject } from '@angular/core';
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


  constructor(private challengesSVC:ChallengesService, @Inject(MAT_DIALOG_DATA) public data: any, private coordinatorSVC:CoordinatorService, private dialog:TdDialogService, public dialogRef:MatDialogRef<EditMedalsComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef) { 
    this.id = data.data;
    this.medalSend= new medalDto();
    this.medal = new medalDto();
    console.log(data)
  }

  updateMedal(){
    this.medal.id
    this.coordinatorSVC.updateMedal(this.medal).then(res =>{
      this.medal=res;
      console.log(this.medal);
    })
  }

  getMedalById(medalSend: medalDto) {
    this.medalSend.id
    this.coordinatorSVC.getMedalById(medalSend).then(res => {
      this.medal = res;
      console.log("dto de la modal",this.medal)
    })
  }

  cerrar(){
    this.dialogRef.close('cerrar');
  }

  ngOnInit() {
    this.getMedalById(this.medal);
    this.medal.id = localStorage.getItem('id');
    console.log(this.medal)
  }

}
