import { Component, OnInit, Inject } from '@angular/core';
import { userDto } from '../../login/models/userDto'
import { LoginService } from '../../login/service/login.service';
import { Router } from '@angular/router';
import { uidDto } from '../../login/models/uidDto';
import { AdminServiceService } from '../../admin/services/admin-service.service';
import { TdLoadingService } from '@covalent/core/loading';
import { CoordinatorService } from '../services/coordinator.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { usersDto } from '../models/usersDto';

export interface Rol {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss'],
  providers: [AdminServiceService, TdLoadingService, CoordinatorService],
})
export class EditUsersComponent implements OnInit {
  user: any;
  usersDto: usersDto;
  uidDto: uidDto;

  rols: Rol[] = [
    { value: 'Usuario', viewValue: 'Usuario' },
    { value: 'Coordinador', viewValue: 'Coordinador' },
    { value: 'Administrador', viewValue: 'Administrador' }
  ];

  constructor(public dialogRef: MatDialogRef<EditUsersComponent>, private _viewContainerRef: ViewContainerRef, private dialog: TdDialogService, @Inject(MAT_DIALOG_DATA) public data: any, private coordinatorSVC: CoordinatorService, private _loadingService: TdLoadingService, private loginSVC: LoginService, private _router: Router, private adminSVC: AdminServiceService) {

    this.user = new userDto();
    this.uidDto = new uidDto();
    this.usersDto = data.data;
    console.log("datassss", data)
    console.log("datassss", this.usersDto.name)

  }

  volver() {
    this._router.navigate(["login"]);
  }

  updateUsers() {
    this._loadingService.register();
    this.usersDto.id
    this.coordinatorSVC.updateUsers(this.usersDto).then(res => {
      this.usersDto = res;
      console.log(this.usersDto);
      this.salir();
      this._loadingService.resolve();
    })
  }

  salir() {
    this.dialog.openAlert({
      message: 'Se ha editado el usuario adecuadamente',
      disableClose: false, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      closeButton: 'Cerrar', //OPTIONAL, defaults to 'CLOSE'
      width: '400px', //OPTIONAL, defaults to 400px
    }).afterClosed().subscribe(
      result => {
        this.dialogRef.close();
      }
    );
    // this.dialogRef.close('cerrar');
  }

  ngOnInit() {
  }

}
