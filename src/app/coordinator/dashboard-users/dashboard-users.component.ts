import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss']
})

export class DashboardUsersComponent implements OnInit {
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string = 'pie';

  constructor(private _router: Router) { }

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

  ngOnInit() {
  }

}





