import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDto } from '../../login/models/userDto';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CoordinatorService } from '../services/coordinator.service';
import { TdLoadingService } from '@covalent/core/loading';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { activityDto } from '../../challenges/models/activityDto';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss'],
  providers: [TdLoadingService, CoordinatorService,ChallengesService]
})

export class DashboardUsersComponent implements OnInit {
  users: userDto[];
  allActivity: activityDto[];

  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string = 'pie';
  i:number=0;

  constructor(private challengesSVC: ChallengesService,private _router: Router, private _dialogRef: MatDialog, private coordinatorSVC: CoordinatorService, private _loadingService: TdLoadingService, ) { 
    this.allActivity = new Array<activityDto>();
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
    this._router.navigate(["registro"]);
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
  public getAllActivity() {
    this._loadingService.register();
    this.challengesSVC.getAllActivy().then(res => {
      this.allActivity = res;
      this._loadingService.resolve();

    })
  }
  ngOnInit() {
    this.getAllUsers();
    this.getAllActivity();

  }

}





