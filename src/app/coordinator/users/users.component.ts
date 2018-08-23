import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { TdLoadingService } from '@covalent/core/loading';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { CoordinatorService } from '../services/coordinator.service';
import { storage } from '../../../../node_modules/firebase';
import {usersDto} from '../models/usersDto';
import { userDto } from '../../login/models/userDto';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [TdLoadingService,CoordinatorService]
})
export class UsersComponent implements OnInit {
users: userDto[];

  constructor(private coordinatorSVC: CoordinatorService,  private _loadingService: TdLoadingService,  private _router: Router, private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, ) { 
 
  }

  getAllUsers(){
    this.coordinatorSVC.getAllUsers().then(res=>{
      this.users=res;
      console.log(res);
    })
  }

  createUser(){
    this._router.navigate(["registro"]);
  }

  ngOnInit() {
    this.getAllUsers();
  }

}
