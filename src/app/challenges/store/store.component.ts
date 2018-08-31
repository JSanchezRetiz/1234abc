import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DetailArticleComponent } from '../detail-article/detail-article.component';
import { ChallengesService } from '../services/challenges.service';
import { storeDto } from '../models/storeDto';
import { TdLoadingService } from '@covalent/core/loading';
import { userDto } from '../../login/models/userDto';
import { LoginService } from '../../login/service/login.service';
import { uidDto } from '../../login/models/uidDto';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [TdDialogService, ChallengesService, TdLoadingService],
})
export class StoreComponent implements OnInit {
  userDto: userDto;
  uidDto: uidDto;
  rows: number
  cols: number
  store: storeDto[];
  test: any = 4;
  breakpoint: number;

  constructor(private loginSVC: LoginService, private _loadingService: TdLoadingService, private _router: Router, _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private _dialogRef: MatDialog, private challengesSVC: ChallengesService) {
    this.store = new Array<storeDto>();
    this.userDto = new userDto();
    this.uidDto = new uidDto();
  }

  openConfirm(dato: storeDto): void {
    console.log("id", dato.itemId)
    localStorage.setItem('itemId', dato.itemId);
    const dialogRef = this._dialogRef.open(DetailArticleComponent, {
      width: '500px',
      data: { data: dato }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUserData();
      console.log('The dialog was closed', result);
    });
  }
  onResize(event) {
    this._loadingService.register();
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
    this._loadingService.resolve()
 
  }

  Volver() {
    this._router.navigate(["perfil"]);
  }

  getAllItemsStore() {
    this.challengesSVC.getAllItemsStore().then(res => {
      this.store = res;
      console.log(this.store)
    })
  }

  ngOnInit() {


    this.cols = 1;
    this.rows = 1;
    this.getAllItemsStore();
    this.getUserData();

    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
  }

  getUserData() {
    this._loadingService.register();
    this.uidDto.id = localStorage.getItem('uid');
    this.loginSVC.getUserData(this.uidDto).then(res => {
      this.userDto = res;
      this._loadingService.resolve();
      this._loadingService.resolve();
      console.log(this.userDto.name, this.userDto.lastname, this.userDto.experience);
    })
  }
}
