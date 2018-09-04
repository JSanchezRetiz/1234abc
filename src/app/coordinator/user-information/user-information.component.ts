import { Component, OnInit, Inject } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdLoadingService } from '@covalent/core/loading';
import { LoginService } from '../../login/service/login.service';
import { usersDto } from '../models/usersDto';
import { userDto } from '../../login/models/userDto';
import { CoordinatorService } from '../services/coordinator.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
  providers: [TdDialogService, TdLoadingService, CoordinatorService],
})
export class UserInformationComponent implements OnInit {
  users: userDto[];
user: usersDto;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private coordinatorSVC: CoordinatorService, private _router: Router, private _viewContainerRef: ViewContainerRef, private loginSVC: LoginService, private _loadingService: TdLoadingService,private dialog: TdDialogService, public dialogRef: MatDialogRef<UserInformationComponent>) {
 this.user=data.data;
 console.log("data", data)
  }

  getAllUsers() {
    this.coordinatorSVC.getAllUsers().then(res => {
      this.users = res;
      console.log(res);
      console.log('cantidad', this.users.length)
      
    })
  }

  cerrar() {
    this.dialogRef.close('cerrar');
  }

  Ver_perfil() {
    this._loadingService.register();
    this._router.navigate(["perfil-publico"]);
    this.cerrar();
    this._loadingService.resolve();
  }

  ngOnInit() {
    this.getAllUsers();
  }

}
