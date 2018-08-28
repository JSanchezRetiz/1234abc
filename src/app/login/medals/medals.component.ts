import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medalDto } from '../../coordinator/models/medalDto';
import { CoordinatorService } from '../../coordinator/services/coordinator.service';

@Component({
  selector: 'app-medals',
  templateUrl: './medals.component.html',
  styleUrls: ['./medals.component.scss'],
  providers: [CoordinatorService]
})
export class MedalsComponent implements OnInit {
  medals: medalDto[];
  rows: number
  cols: number
  test: any = 4;
  constructor(private _router: Router, private coordinatorSVC: CoordinatorService) {
    this.medals = new Array<medalDto>();

  }
  onResize(event) {
    const element = event.target.innerWidth;
    if (element < 950) {
      this.test = 1;

    }
    if (element>950){
      this.test= 4;
    }

  }
  getAllMedals() {

    this.coordinatorSVC.getAllMedals().then(res => {
      this.medals = res;
    })
  }

  Volver() {
    this._router.navigate(["perfil"]);
  }

  ngOnInit() {
    this.cols = 1;
    this.rows= 1;

    this.getAllMedals()
  }

}
