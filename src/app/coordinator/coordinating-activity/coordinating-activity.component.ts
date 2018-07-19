import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdLoadingService } from '@covalent/core/loading';
import { TdDialogService } from '@covalent/core/dialogs';
import {EditComponent} from '../edit/edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coordinating-activity',
  templateUrl: './coordinating-activity.component.html',
  styleUrls: ['./coordinating-activity.component.scss'],

})
export class CoordinatingActivityComponent implements OnInit {

  constructor(private _router: Router,_dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private _dialogRef: MatDialog) { }

  editar() {
    const dialogRef = this._dialogRef.open(EditComponent, {
      width: '1000px',
      height: '600px',
      data: { data: 'dato' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });
  }

 
  Volver() {
    this._router.navigate(["perfil-coordinador"]);
  }

  ngOnInit() {
  }

}
