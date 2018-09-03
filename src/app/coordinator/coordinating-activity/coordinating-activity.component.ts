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
import { CoordinatorService } from '../services/coordinator.service';
import { storeDto } from '../../challenges/models/storeDto';
import { medalDto } from '../models/medalDto';
import { scoreDto } from '../models/scoreDto';
import { myActivitiesDto } from '../../challenges/models/myActivitiesDto';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-coordinating-activity',
  templateUrl: './coordinating-activity.component.html',
  styleUrls: ['./coordinating-activity.component.scss'],
  providers: [TdLoadingService, ChallengesService, LoginService, CoordinatorService, TdDialogService],
})
export class CoordinatingActivityComponent implements OnInit {
  allActivity: activityDto[];
  uidDto: uidDto;
  userDto: userDto;
  activity: activityDto;
  score: scoreDto;
  hard: string;
  medium: string;
  easy: string;
  day: any;
  dayFormat: Date;
  activityRegister: myActivitiesDto[];
  activityRegisterSend:myActivitiesDto;

  constructor(private coordinatorSVC: CoordinatorService, private loginSVC: LoginService, private _loadingService: TdLoadingService, private challengesSVC: ChallengesService, private _router: Router, private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private _dialogRef: MatDialog) {
    this.allActivity = new Array<activityDto>();
    this.uidDto = new uidDto();
    this.userDto = new userDto();
    this.activity = new activityDto();
    this.day = Date.now();
    this.dayFormat = new Date(this.day);
    this.activityRegisterSend =new myActivitiesDto();
  }

  Ver_lista() {
    let NavigationExtras: NavigationExtras = {
      queryParams: {
        "idActivity": JSON.stringify(this.activityRegister),
      }
    };
    this._router.navigate(["lista-registrados"], NavigationExtras);
  }

  crear(dato: activityDto): void {
    const dialogRef = this._dialogRef.open(CreateActivityComponent, {
      width: '1000px',
      height: '600px',
      data: { data: dato, }
    });
    dialogRef.afterClosed().subscribe(result => {

      this.getAllActivity();
    });
  }

  getUserData() {
    this._loadingService.register();
    this.uidDto.id = localStorage.getItem('uid');
    this.loginSVC.getUserData(this.uidDto).then(res => {
      this.userDto = res;
      this._loadingService.resolve();
    })
  }

  editar(activity: activityDto, ) {
    const dialogRef = this._dialogRef.open(EditComponent, {
      width: '1000px',
      height: '600px',
      data: { data: this.allActivity, activity: activity }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllActivity();
    });
  }

  public getAllActivity() {

    this._loadingService.register();
    this.challengesSVC.getAllActivy().then(res => {
      this.allActivity = res;
      this._loadingService.resolve();
    })
  }

  Volver() {
    this._router.navigate(["dashboard-usuarios"]);
  }
  getAllActivityRegister() {
    this.coordinatorSVC.getAllActivityRegister().then(res => {
      this.activityRegister = res;
      console.log("todas las actividades registradas:", this.activityRegister)
      for (const key of this.activityRegister) {
        console.log(key.id);
      }
    })
  }
 
  Confirmar(dato: activityDto): void {
    this._dialogService.openConfirm({
      message: 'Esta seguro de eliminar esta actividad?',
      disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      cancelButton: 'Cancelar', //OPTIONAL, defaults to 'CANCEL'
      acceptButton: 'Confirmar', //OPTIONAL, defaults to 'ACCEPT'
      width: '500px', //OPTIONAL, defaults to 400px
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.eliminar(dato)
      } else {
        this.cerrar();
      }
    });
  }
  cerrar() {
    this._dialogRef.closeAll();
  }
  eliminar(dato: activityDto) {
    this._loadingService.register();
    console.log("id", dato)
    localStorage.setItem('id', dato.id);
    this.coordinatorSVC.deleteActivity(dato).then(res => {
      this.activity = res;
      console.log(res);
      this.getAllActivity();
      this._loadingService.resolve();
    })
  }
  ngOnInit() {
    this.easy = "facil";
    this.medium = "medio";
    this.hard = "dificil";
    this.getUserData();
    this.getAllActivity();
    this.getAllActivityRegister();
  }

}
