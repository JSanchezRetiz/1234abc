import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medals',
  templateUrl: './medals.component.html',
  styleUrls: ['./medals.component.scss']
})
export class MedalsComponent implements OnInit {

  constructor(private _router: Router) { }

  Volver() {
    this._router.navigate(["perfil"]);
  }

  ngOnInit() {
  }

}
