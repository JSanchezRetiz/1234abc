import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medalDto } from '../../coordinator/models/medalDto';
import { CoordinatorService } from '../../coordinator/services/coordinator.service';
import { TdLoadingService } from '@covalent/core/loading';


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
  breakpoint: number;

  constructor(private _loadingService: TdLoadingService,private _router: Router, private coordinatorSVC: CoordinatorService) {
    this.medals = new Array<medalDto>();

  }
  onResize(event) {
    this._loadingService.register();
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
    this._loadingService.resolve()
 
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

    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
  }

}
