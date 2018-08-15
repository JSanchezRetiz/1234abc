import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { TdDialogService } from '@covalent/core/dialogs';
import { userDto } from '../../login/models/userDto';
import { LoginService } from '../../login/service/login.service';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { uidDto } from '../../login/models/uidDto';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../../login/login/login.component'
import { ChallengesService } from '../services/challenges.service'
import { activityDto } from '../models/activityDto';
import { DetailActivitiesComponent } from '../detail-activities/detail-activities.component';
import { TdLoadingService } from '@covalent/core/loading';

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
  activity: activityDto;

  constructor(private _router: Router, private loginSVC: LoginService,
    _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef,
    private challengesSVC: ChallengesService, private _dialogRef: MatDialog, private _loadingService: TdLoadingService) {
    this.userDto = new userDto();
    this.uidDto = new uidDto();
    this.allActivity = new Array<activityDto>();
  }
  
  openConfirm(dato: activityDto): void {
    console.log(dato);
    localStorage.setItem('idActivity', "" + dato.id)
    const dialogRef = this._dialogRef.open(DetailActivitiesComponent, {
      width: '500px',
      height: '600px',
      data: { data: dato }
    });
    dialogRef.afterClosed().subscribe(result => {
      localStorage.removeItem('idActivity');
      console.log('The dialog was closed', result);
    });
  }
  //  pasarDatos(activity: activityDto) {
  //    let NavigationExtras: NavigationExtras = {
  //   queryParams: {
  //      "activities": JSON.stringify(activity),
  //    }
  //   };
  //   this._router.navigate(["ranking"], NavigationExtras);
  // }

  getUserData() {
    this._loadingService.register();
    this.uidDto.id = localStorage.getItem('uid');
    this.loginSVC.getUserData(this.uidDto).then(res => {
      this.userDto = res;
      this._loadingService.resolve();
      console.log(this.userDto.name, this.userDto.lastname, this.userDto.experience);
    })
  }
  ngOnInit() {
    this.getUserData();
    this.getAllActivity()
  }
  public getAllActivity() {
    this._loadingService.register();
    this.challengesSVC.getAllActivy().then(res => {
      this.allActivity = res;
      this._loadingService.resolve();
      console.log(this.allActivity)

    })
  }
}
