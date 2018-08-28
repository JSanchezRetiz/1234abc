import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDto } from '../../login/models/userDto';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CoordinatorService } from '../services/coordinator.service';
import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss'],
  providers: [TdLoadingService, CoordinatorService]
})

export class DashboardUsersComponent implements OnInit {
  users: userDto[];
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string = 'pie';
  i:number=0;

  constructor(private _router: Router, private _dialogRef: MatDialog, private coordinatorSVC: CoordinatorService, private _loadingService: TdLoadingService, ) { }

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
 
  ngOnInit() {
    this.getAllUsers();

  }

}





