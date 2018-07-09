import { Component, OnInit } from '@angular/core';
import { uidDto } from '../../loginn/models/uidDto';
import { userDto } from '../../loginn/models/userDto';
import {LoginService} from '../../loginn/service/login.service'
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
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
