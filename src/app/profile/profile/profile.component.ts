import { Component, OnInit } from '@angular/core';
import { uidDto } from '../../login/models/uidDto';
import { userDto } from '../../login/models/userDto';
import { LoginService } from '../../login/service/login.service';
import { Router } from '@angular/router';
import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  uidDto: uidDto;
  userDto: userDto;
  creationDate:Date;

 

  constructor(private _router: Router, private loginSVC: LoginService, private _loadingService:TdLoadingService) {
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
    this._loadingService.register();
    this.uidDto.id = localStorage.getItem('uid');
    this.loginSVC.getUserData(this.uidDto).then(res => {
      this.userDto = res;
      this._loadingService.resolve();

      this._loadingService.resolve();

      console.log(this.userDto.name, this.userDto.lastname, this.userDto.experience);
    })
  }
}