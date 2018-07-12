import { Component, OnInit } from '@angular/core';
import { uidDto } from '../../login/models/uidDto';
import { userDto } from '../../login/models/userDto';
import { LoginService } from '../../login/service/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  uidDto: uidDto;
  userDto: userDto;

 

  constructor(private _router: Router, private loginSVC: LoginService) {
    this.uidDto = new uidDto();
    this.userDto = new userDto();
   }


  Ver_mas() {
    this._router.navigate(["medallas"]);
  }

  ngOnInit() {
   

    this.getUserData();
  }
  getUserData() {
    this.uidDto.id = localStorage.getItem('uid');
    this.loginSVC.getUserData(this.uidDto).then(res => {
      this.userDto = res;

      console.log(this.userDto.name, this.userDto.lastname, this.userDto.experience);
    })
  }
}