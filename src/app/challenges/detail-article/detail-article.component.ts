import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChallengesService } from '../services/challenges.service';
import { storeDto } from '../models/storeDto';
import { purchaseDto } from '../models/purchaseDto';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss'],
  providers: [TdDialogService, ChallengesService],
})
export class DetailArticleComponent implements OnInit {
  purchase: purchaseDto;
  tiendaSend: storeDto;
  tienda: storeDto;
  constructor(private dialog: TdDialogService, public dialogRef: MatDialogRef<DetailArticleComponent>, private challengesSVC: ChallengesService) {
    this.purchase = new purchaseDto();
    this.tiendaSend = new storeDto();
    this.tienda = new storeDto();
  }

  cerrar() {
    this.dialogRef.close('cerrar');
  }
  getItemById(tiendaSend: storeDto) {

    this.challengesSVC.getItemById(tiendaSend).then(res => {
      this.tienda = res;
      //console.log("RESPUESTA getItemById"+res);

    })
  }
  comprar() {
    this.purchase.uid = localStorage.getItem('uid');
    this.purchase.itemId =this.tienda.itemId;
    console.log(this.purchase.uid);
    console.log(this.purchase.itemId);
    this.challengesSVC.getStoreItem(this.purchase).then(res => {
      alert('insuficiente');
    })
  }
  ngOnInit() {
    this.tiendaSend.itemId = localStorage.getItem('itemId');
    console.log("ID",this.tiendaSend.itemId)
    localStorage.removeItem('itemId');
    this.getItemById(this.tiendaSend);
  }


}
