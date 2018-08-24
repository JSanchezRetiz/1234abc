import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.scss']
})
export class ListRegisterComponent implements OnInit {

  constructor(private _router: Router,) { }

  Volver() {
    this._router.navigate(["actividad-coordinador"]);
  }

  ngOnInit() {
  }

}
