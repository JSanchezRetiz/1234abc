import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDto } from '../../login/models/userDto';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CoordinatorService } from '../services/coordinator.service';
import { TdLoadingService } from '@covalent/core/loading';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { activityDto } from '../../challenges/models/activityDto';
import { myActivitiesDto } from '../../challenges/models/myActivitiesDto';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss'],
  providers: [TdLoadingService, CoordinatorService, ChallengesService]
})

export class DashboardUsersComponent implements OnInit {
  users: userDto[];
  allActivity: activityDto[];
  myActivities: myActivitiesDto[];
  myActivitiesSend: myActivitiesDto;
  activitySend: activityDto;
  selectValue: boolean;

  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string = 'pie';
  i: number = 0;

  constructor(private challengesSVC: ChallengesService, private _router: Router, private _dialogRef: MatDialog, private coordinatorSVC: CoordinatorService, private _loadingService: TdLoadingService, ) {
    this.allActivity = new Array<activityDto>();
    this.myActivities = new Array<myActivitiesDto>();
    this.myActivitiesSend = new myActivitiesDto();
    this.activitySend = new activityDto();
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  Agregar_recompensa() {
    this._router.navigate(["recompensa-coordinador"]);
  }

  Agregar_actividad() {
    this._router.navigate(["actividad-coordinador"]);
  }

  Agregar_usuario() {
    this._router.navigate(["usuarios"]);
  }

  Agregar_medalla() {
    this._router.navigate(["medallas-coordinador"]);
  }

  Agregar_notificacion() {
    this._router.navigate(["notificaciones-coordinador"]);
  }
  getAllUsers() {
    this.coordinatorSVC.getAllUsers().then(res => {
      this.users = res;
      console.log(res);
      console.log('cantidad', this.users.length)
    })
  }
  getAllActivityRegister() {
    this.coordinatorSVC.getAllActivityRegister().then(res => {
      this.myActivities = res;
      console.log("todas las actividades registradas:", this.myActivities)
      if(this.selectValue== true){
        this.coordinatorSVC.getActivitiesById(this.myActivitiesSend).then(res=>{
          this.myActivities=res;
        })
      }
    })
  }
  public getAllActivity() {
    this._loadingService.register();
    this.challengesSVC.getAllActivity().then(res => {
      this.allActivity = res;
      console.log("actividades", res)
      this._loadingService.resolve();
      console.log(this.allActivity);
      for (const key of this.allActivity) {
        console.log(key.id);
      }
    })
  }

  getActivitysById() {
    console.log("datos traidos:", this.myActivitiesSend.idActivity)
    this.myActivitiesSend.idActivity = localStorage.getItem('idActivity');
    console.log("id de la actividad", this.myActivitiesSend.idActivity)
    this.coordinatorSVC.getActivitiesById(this.myActivitiesSend).then(res => {
      this.myActivities = res;
      console.log(res)

      //console.log("resultado", this.myActivitySend);
    })
  }
  capturarId() {

  }
  ngOnInit() {
    this.getAllUsers();
    this.getAllActivity();
    this.getActivitysById();
    this.getAllActivityRegister();
  }

  actualizarCosa() {
 



  }
}