import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DetailArticleComponent } from '../detail-article/detail-article.component';
import { ChallengesService } from '../services/challenges.service';
import { storeDto } from '../models/storeDto';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [TdDialogService, ChallengesService],
})
export class StoreComponent implements OnInit {

store:storeDto[];



  constructor(private _router: Router, _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private _dialogRef: MatDialog, private challengesSVC: ChallengesService) {
  
  this.store= new Array <storeDto>();
  
  }

  openConfirm(store:storeDto): void {

    const dialogRef = this._dialogRef.open(DetailArticleComponent, {
      width: '500px',
      data: { data: store }
    });
    console.log("dato",this.store)
    dialogRef.afterClosed().subscribe(result => {
      
      console.log('The dialog was closed', result);
      
    });
  }

 
  Volver() {
    this._router.navigate(["perfil"]);
  }

  getAllItemsStore(){

    this.challengesSVC.getAllItemsStore().then(res => {
      this.store = res;
 
      console.log(this.store)
    })
  }

  ngOnInit() {
    this.getAllItemsStore();
  }


}
