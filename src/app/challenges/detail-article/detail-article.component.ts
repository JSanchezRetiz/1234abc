import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChallengesService } from '../services/challenges.service';
import {storeDto } from '../models/storeDto';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss'],
  providers: [TdDialogService, ChallengesService],
})
export class DetailArticleComponent implements OnInit {

  tiendaSend: storeDto;

  constructor(private dialog: TdDialogService, public dialogRef: MatDialogRef<DetailArticleComponent>, private challengesSVC: ChallengesService) {
 
 this.tiendaSend=new storeDto();
  }

  cerrar() {
    this.dialogRef.close('cerrar');
  }
  // getItemById(id:string){
  //  this.tiendaSend.
  //   this.challengesSVC.getItemById(this.tienda).then(res => {
  //   //  this.tienda = res;
  //    console.log("RESPUESTA getItemById"+res);

  //   })
  // }

  ngOnInit() {
    this.getItemById();
  }


}
