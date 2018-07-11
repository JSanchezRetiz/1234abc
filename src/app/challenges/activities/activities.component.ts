import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { TdDialogService } from '@covalent/core/dialogs';
import { userDto } from '../../login/models/userDto';
import { LoginService } from '../../login/service/login.service';
import { Router } from '@angular/router';
import { uidDto } from '../../login/models/uidDto';
import { ViewContainerRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
  providers: [LoginService,TdDialogService],
})
export class ActivitiesComponent implements OnInit {
  userDto: userDto;
  uidDto:uidDto;
  disableClose:boolean
  constructor(private _router: Router, private loginSVC: LoginService,private _dialogService: TdDialogService,private _viewContainerRef: ViewContainerRef) {
    this.userDto = new userDto();
    this.uidDto = new uidDto();
  }
  openAlert(): void {
    this._dialogService.openAlert({message: 'This is how simple it is to create an alert with this wrapper service.',
      disableClose: true,
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Alert', //OPTIONAL, hides if not provided
      closeButton: 'Close', //OPTIONAL, defaults to 'CLOSE'
      width: '100%', //OPTIONAL, defaults to 400px
    });
  }
  getUserData(){
    this.uidDto.id= localStorage.getItem('uid');
    this.loginSVC.getUserData(this.uidDto).then(res=>{
      this.userDto= res;
     
      console.log(this.userDto.name,this.userDto.lastname,this.userDto.experience);
    })
    }
    
    
  ngOnInit() {
        this.getUserData();
        
  }

}