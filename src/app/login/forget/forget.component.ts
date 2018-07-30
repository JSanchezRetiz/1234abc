import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../service/login.service'
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  email: string;

  constructor(private _router: Router, private loginSVC: LoginService) {


  }




  Cancelar() {
    this._router.navigate(["login"]);
  }
forgetPassword(){
  var email = this.email
  this.loginSVC.forgetPassword(email).then((res)=>{
    this._router.navigate[('login')]
  });
}
  ngOnInit() {
  }

}
