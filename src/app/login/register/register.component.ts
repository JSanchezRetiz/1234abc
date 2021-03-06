import { Component, OnInit } from '@angular/core';
import { userDto } from '../models/userDto';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { uidDto } from '../models/uidDto';
import { AdminServiceService } from '../../admin/services/admin-service.service';

export interface Rol {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AdminServiceService],
})

export class RegisterComponent implements OnInit {
  userDto: userDto;
  uidDto: uidDto;

  rols: Rol[] = [
    { value: 'Usuario', viewValue: 'Usuario' },
    { value: 'Coordinador', viewValue: 'Coordinador' },
    { value: 'Administrador', viewValue: 'Administrador' }
  ];

  constructor(private loginSVC: LoginService, private _router: Router, private adminSVC: AdminServiceService) {
    this.userDto = new userDto();
    this.uidDto = new uidDto();
  }

  volver() {
    this._router.navigate(["usuarios"]);
  }

  createAuthUser() {
    alert(this.userDto.email);
    this.adminSVC.createAuthUser(this.userDto).then(res => {
      console.log(res);
      var email = this.userDto.email;
      this.loginSVC.forgetPassword(email);
    })
    this._router.navigate(["login"]);
  }
  
  ngOnInit() {
  }

}
