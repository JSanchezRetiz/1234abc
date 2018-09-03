import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdLoadingService } from '@covalent/core/loading';
import { LoginService } from '../../login/service/login.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
  providers: [TdDialogService, TdLoadingService],
})
export class UserInformationComponent implements OnInit {

  constructor(private _router: Router, private _viewContainerRef: ViewContainerRef, private loginSVC: LoginService, private _loadingService: TdLoadingService,private dialog: TdDialogService, public dialogRef: MatDialogRef<UserInformationComponent>) {
  }

  cerrar() {
    this.dialogRef.close('cerrar');
  }

  Ver_perfil() {
    this._loadingService.register();
    this._router.navigate(["perfil"]);
    this.cerrar();
    this._loadingService.resolve();
  }

  ngOnInit() {
  }

}
