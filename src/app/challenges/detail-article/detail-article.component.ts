import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChallengesService } from '../services/challenges.service';
import { storeDto } from '../models/storeDto';
import { purchaseDto } from '../models/purchaseDto';
import { TdLoadingService } from '@covalent/core/loading';
import { uidDto } from '../../login/models/uidDto';
import { LoginService } from '../../login/service/login.service';
import { userDto } from '../../login/models/userDto';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss'],
  providers: [TdDialogService, ChallengesService, TdLoadingService],
})

export class DetailArticleComponent implements OnInit {
  purchase: purchaseDto;
  tiendaSend: storeDto;
  tienda: storeDto;
  uidDto: uidDto;
  userDto: userDto;

  constructor(private _viewContainerRef: ViewContainerRef, private loginSVC: LoginService, private _loadingService: TdLoadingService,private dialog: TdDialogService, public dialogRef: MatDialogRef<DetailArticleComponent>, private challengesSVC: ChallengesService) {
    this.purchase = new purchaseDto();
    this.tiendaSend = new storeDto();
    this.tienda = new storeDto();
    this.uidDto = new uidDto();
    this.userDto = new userDto();
  }

  cerrar() {
    this.dialogRef.close('cerrar');
  }

  getItemById(tiendaSend: storeDto) {
    this.challengesSVC.getItemById(tiendaSend).then(res => {
      this.tienda = res;
      console.log('puntos de compra', this.tienda.scorePrice)
      //console.log("RESPUESTA getItemById"+res);
    })
  }

  comprar() {
    this.purchase.uid = localStorage.getItem('uid');
    this.purchase.itemId =this.tienda.itemId;
    if(this.userDto.score >= this.tienda.scorePrice){
      this.challengesSVC.getStoreItem(this.purchase).then(res => {
      })
      this._loadingService.register();
      this.dialog.openAlert({
        message: 'Se ha comprado el articulo',
        disableClose: false, // defaults to false
        viewContainerRef: this._viewContainerRef, //OPTIONAL
        title: 'Atencion:', //OPTIONAL, hides if not provided
        closeButton: 'Cerrar', //OPTIONAL, defaults to 'CLOSE'
        width: '400px', //OPTIONAL, defaults to 400px
      }).afterClosed().subscribe(
        result => {
          this._loadingService.resolve();
          this.dialogRef.close();
        }
        );
      // alert('compro');
    }else {
      this.dialog.openAlert({
        message: 'Saldo insuficiente',
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
    }
  }

  getUserData() {
    this._loadingService.register();
    this.uidDto.id = localStorage.getItem('uid');
    this.loginSVC.getUserData(this.uidDto).then(res => {
      this.userDto = res;
      this._loadingService.resolve();
      this._loadingService.resolve();
      console.log(this.userDto.name, this.userDto.lastname, this.userDto.experience);
      console.log("acumulado", this.userDto.score)
    })
  }

  ngOnInit() {
    // console.log("acumulado", this.userDto.score)
    this.tiendaSend.itemId = localStorage.getItem('itemId');
    console.log("ID",this.tiendaSend.itemId)
    localStorage.removeItem('itemId');
    this.getItemById(this.tiendaSend);
    this.getUserData();
  }
}
