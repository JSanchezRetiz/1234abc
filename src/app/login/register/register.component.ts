import { Component, OnInit } from '@angular/core';
import { userDto } from '../models/userDto';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { uidDto } from '../models/uidDto';
import {AdminServiceService} from '../../admin/services/admin-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AdminServiceService],
})
export class RegisterComponent implements OnInit {

  userDto: userDto;
  uidDto:  uidDto;

  constructor( private loginSVC:LoginService, private _router: Router, private adminSVC:AdminServiceService) {

    this.userDto = new userDto();
    this.uidDto = new uidDto();

   }

  volver(){
    this._router.navigate(["login"]);
  }
  createAuthUser(){
    alert(this.userDto.email);
 this.adminSVC.createAuthUser(this.userDto).then(res =>{
console.log(res);
 })
 this._router.navigate(["login"]);
    }
  ngOnInit() {
  }

}
