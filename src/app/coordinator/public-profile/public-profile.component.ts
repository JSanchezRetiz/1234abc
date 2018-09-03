import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  constructor(private _router: Router,) { }

  Volver() {
    this._router.navigate(["usuarios"]);
  }

  ngOnInit() {
  }

}
