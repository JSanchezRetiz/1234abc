import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { TdDialogService } from '@covalent/core/dialogs';
import { userDto } from '../../login/models/userDto';
import { LoginService } from '../../login/service/login.service';
import { Router } from '@angular/router';
import { uidDto } from '../../login/models/uidDto';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChallengesService } from '../services/challenges.service'
import { activityDto } from '../models/activityDto';
import { all } from '../../../../node_modules/@types/q';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
  providers: [LoginService, TdDialogService, ChallengesService],
})
export class ActivitiesComponent implements OnInit {
  userDto: userDto;
  uidDto: uidDto;
  disableClose: boolean;
  allActivity: activityDto[];
  
  constructor(private _router: Router, private loginSVC: LoginService, private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private challengesSVC: ChallengesService) {
    this.userDto = new userDto();
    this.uidDto = new uidDto();
    this.allActivity= new Array<activityDto>();
  }
  openAlert(): void {
    this._dialogService.openAlert({
      message: 'This is how simple it is to create an alert with this wrapper service.',
      disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Alert', //OPTIONAL, hides if not provided
      closeButton: 'Close', //OPTIONAL, defaults to 'CLOSE'
      width: '400px', //OPTIONAL, defaults to 400px
    });
  }

  getUserData() {
    this.uidDto.id = localStorage.getItem('uid');
    this.loginSVC.getUserData(this.uidDto).then(res => {
      this.userDto = res;

      console.log(this.userDto.name, this.userDto.lastname, this.userDto.experience);
    })
  }


  ngOnInit() {
    this.getUserData();
    this.getAllActivity()

  }
  public getAllActivity() {
    alert("consultando todas las actividades")
    this.challengesSVC.getAllActivy().then(res => {
     this.allActivity= res;
     console.log(this.allActivity)
    })
  }

}