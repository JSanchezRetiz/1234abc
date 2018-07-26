import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdLoadingService } from '@covalent/core/loading';
import { TdDialogService } from '@covalent/core/dialogs';
import { EditComponent } from '../edit/edit.component';
import { Router } from '@angular/router';
import { CreateActivityComponent } from '../create-activity/create-activity.component';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { activityDto } from '../../challenges/models/activityDto';
import { LoginService } from '../../login/service/login.service';
import { uidDto } from '../../login/models/uidDto';
import { userDto } from '../../login/models/userDto';
 

@Component({
  selector: 'app-coordinating-activity',
  templateUrl: './coordinating-activity.component.html',
  styleUrls: ['./coordinating-activity.component.scss'],
  providers: [TdLoadingService, ChallengesService,LoginService],

})
export class CoordinatingActivityComponent implements OnInit {
  allActivity: activityDto[];
  uidDto: uidDto;
  userDto: userDto;

  constructor(private loginSVC: LoginService, private _loadingService: TdLoadingService, private challengesSVC: ChallengesService, private _router: Router, private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private _dialogRef: MatDialog) {
    this.allActivity = new Array<activityDto>();
    this.uidDto= new uidDto();
    this.userDto= new userDto();

  }
  crear(dato: activityDto): void {
    const dialogRef = this._dialogRef.open(CreateActivityComponent, {
      width: '1000px',
      height: '600px',
      data: { data: dato }
    });
    dialogRef.afterClosed().subscribe(result => {
      localStorage.removeItem('idActivity');
      console.log('The dialog was closed', result);
      this.getAllActivity();
      // this.getAllItemsStore();

    });
  }

  getUserData() {
    this._loadingService.register();
    this.uidDto.id = localStorage.getItem('uid');
    this.loginSVC.getUserData(this.uidDto).then(res => {
      this.userDto = res;
      this._loadingService.resolve();
      console.log(this.userDto.name, this.userDto.lastname, this.userDto.experience);
    })
  }

  eliminar(): void {
    this._dialogService.openAlert({
      message: '¿Desea eliminar esta actividad?.',
      disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      closeButton: 'Cerrar', //OPTIONAL, defaults to 'CLOSE'
      width: '400px', //OPTIONAL, defaults to 400px
    });
  }

  editar() {
    const dialogRef = this._dialogRef.open(EditComponent, {
      width: '1000px',
      height: '600px',
      data: { data: 'dato' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });
  }

  public getAllActivity() {
    this._loadingService.register();
    this.challengesSVC.getAllActivy().then(res => {
      this.allActivity = res;
      this._loadingService.resolve();
      console.log(this.allActivity)
    })
  }




  Volver() {
    this._router.navigate(["perfil-coordinador"]);
  }

  ngOnInit() {
    this.getUserData();
    this.getAllActivity();
  }

}
