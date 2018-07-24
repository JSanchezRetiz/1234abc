import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdLoadingService } from '@covalent/core/loading';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { CreateRewardComponent } from '../create-reward/create-reward.component';

@Component({
  selector: 'app-coordinator-reward',
  templateUrl: './coordinator-reward.component.html',
  styleUrls: ['./coordinator-reward.component.scss']
})
export class CoordinatorRewardComponent implements OnInit {

  constructor(private _router: Router,private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private _dialogRef: MatDialog) { }

  eliminar(): void {
    this._dialogService.openAlert({
      message: '¿Desea eliminar esta actividad?.',
      disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Atencion:', //OPTIONAL, hides if not provided
      closeButton: 'Cerrar', //OPTIONAL, defaults to 'CLOSE'
      width: '400px', //OPTIONAL, defaults to 400px
    });
  }
  
  crear() {
    const dialogRef = this._dialogRef.open(CreateRewardComponent, {
      width: '1000px',
      height: '600px',
      data: { data: 'dato' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });
  }

  ngOnInit() {
  }

}
