import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor(private _router: Router) { }

  Volver() {
    this._router.navigate(["perfil"]);
  }

  ngOnInit() {
  }

}
