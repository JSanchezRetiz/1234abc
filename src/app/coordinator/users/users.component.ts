import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { TdLoadingService } from '@covalent/core/loading';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { CoordinatorService } from '../services/coordinator.service';
import { storage } from '../../../../node_modules/firebase';
import { usersDto } from '../models/usersDto';
import { userDto } from '../../login/models/userDto';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditUsersComponent } from '../edit-users/edit-users.component';
import { UserInformationComponent } from '../user-information/user-information.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [TdLoadingService, CoordinatorService]
})

export class UsersComponent implements OnInit {
  users: usersDto[];
  userSend: usersDto;
  disabled: boolean;

  constructor(private _dialogRef: MatDialog, private coordinatorSVC: CoordinatorService, private _loadingService: TdLoadingService, private _router: Router, private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, ) {
    this.userSend = new usersDto();
    console.log("nombre del usuario",this.userSend.name)
  }

  getAllUsers() {
    this.coordinatorSVC.getAllUsers().then(res => {
      this.users = res;
      console.log(res);
      console.log('cantidad', this.users.length)
    })
  }

  createUser() {
    this._router.navigate(["registro"]);
  }

  Confirmar(dato: usersDto): void {
    this._dialogService.openConfirm({
      message: 'Esta seguro de eliminar este usuario?',
      disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      cancelButton: 'Cancelar', //OPTIONAL, defaults to 'CANCEL'
      acceptButton: 'Confirmar', //OPTIONAL, defaults to 'ACCEPT'
      width: '500px', //OPTIONAL, defaults to 400px
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.eliminar(dato)
      } else {
        this.cerrar();
      }
    });
  }

  cerrar() {
    this._dialogRef.closeAll();
  }

  eliminar(dato: usersDto) {
    this._loadingService.register();
    console.log("id", dato)
    localStorage.setItem('id', dato.id);
    this.coordinatorSVC.deleteUsers(dato).then(res => {
      this.userSend = res;
      console.log(res);
      this.getAllUsers();
      this._loadingService.resolve();
    })
  }

  editar(user: usersDto) {
    const dialogRef = this._dialogRef.open(EditUsersComponent, {
      width: '1000px',
      height: '600px',
      data: { data: this.users, dato: user }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllUsers();
    });
  }

  updateStatusUser(user: usersDto) {
    console.log("usuario capturado: "+user);
    this.disabled = !this.disabled;
 
    if (this.disabled == true) {
     // console.log("nombre del usuario",user.lastname)
      var rta = confirm("deshablitar perfil de: " + user);
    } else {
      var rta = confirm('habilitar nuevamente el perfil de: ' + user);
    } if (rta == true) {
      console.log("cambiar estado de cuenta " + user + "a : " + this.disabled);
      this.userSend.id = localStorage.getItem('id');
      this.userSend.idUser = localStorage.getItem('uid');
      this.userSend.status = this.disabled;
      this.coordinatorSVC.updateStatusUser(this.userSend).then((res) => {
        var rta = res.json();
        alert(rta.msg);
      });
    }
  }

  informationUsers(dato: usersDto) {
    const dialogRef = this._dialogRef.open(UserInformationComponent, {
      width: '600px',
      height: '600px',
      data: { data: dato }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  Volver() {
    this._router.navigate(["dashboard-usuarios"]);
  }

  ngOnInit() {
    this.getAllUsers();
  }

}
