import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private _router: Router) { }

  Volver() {
    this._router.navigate(["perfil"]);
  }

  ngOnInit() {
  }

}
