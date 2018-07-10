import { Component, OnInit } from '@angular/core';
import { uidDto } from '../../login/models/uidDto';
import { userDto } from '../../login/models/userDto';
import {LoginService} from '../../login/service/login.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  uidDto: uidDto;
  userDto: userDto;

  constructor(private loginSVC: LoginService) { }

  ngOnInit() {
    this.uidDto= new uidDto();
    this.userDto= new userDto();
  
    this.getUserData();
  }
getUserData(){
this.uidDto.id= localStorage.getItem('uid');
this.loginSVC.getUserData(this.uidDto).then(res=>{
  this.userDto= res;
 
  console.log(this.userDto.name,this.userDto.lastname,this.userDto.experience);
})
}
}
