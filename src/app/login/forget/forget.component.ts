import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../service/login.service';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss'],
  providers: [TdDialogService, TdLoadingService],
})

export class ForgetComponent implements OnInit {
  email: string;

  constructor(private _loadingService: TdLoadingService, private dialog: TdDialogService, private _viewContainerRef: ViewContainerRef, private _router: Router, private loginSVC: LoginService) {
  }

  Cancelar() {
    this._router.navigate(["login"]);
  }

  forgetPassword() {
    var email = this.email
    this.loginSVC.forgetPassword(email).then((res) => {
      this.login();
    });
  }

  login() {
    this.dialog.openAlert({
      message: 'Se ha enviado un correo para restablecer la contraseña.',
      disableClose: false, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      closeButton: 'Ok', //OPTIONAL, defaults to 'CLOSE'
      width: '400px', //OPTIONAL, defaults to 400px
    }).afterClosed().subscribe(
      result => {
        this._router.navigate(["login"]);
      }
    );

  }
  ngOnInit() {
  }

}
