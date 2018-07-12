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
  openConfirm(): void {
    this._dialogService.openConfirm({
      message: 'This is how simple it is to create a confirm with this wrapper service. Do you agree?',
      disableClose: true , // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Confirm', //OPTIONAL, hides if not provided
      cancelButton: 'Disagree', //OPTIONAL, defaults to 'CANCEL'
      acceptButton: 'Agree', //OPTIONAL, defaults to 'ACCEPT'
      width: '500px', //OPTIONAL, defaults to 400px
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        // DO SOMETHING
      } else {
        // DO SOMETHING ELSE
      }
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
