import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coordinator-profile',
  templateUrl: './coordinator-profile.component.html',
  styleUrls: ['./coordinator-profile.component.scss']
})
export class CoordinatorProfileComponent implements OnInit {

  constructor(private _router: Router) { }



  ngOnInit() {
  }

}
