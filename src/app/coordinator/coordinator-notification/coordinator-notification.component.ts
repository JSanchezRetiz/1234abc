import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdDialogService } from '@covalent/core/dialogs';
import { TdLoadingService } from '@covalent/core/loading';
import { Router } from '@angular/router';
import { CreateNotificationComponent } from '../create-notification/create-notification.component';
import { EditNotificationComponent } from '../edit-notification/edit-notification.component';

@Component({
  selector: 'app-coordinator-notification',
  templateUrl: './coordinator-notification.component.html',
  styleUrls: ['./coordinator-notification.component.scss'],
  providers: [TdDialogService],
})
export class CoordinatorNotificationComponent implements OnInit {

  constructor( private _loadingService: TdLoadingService, private _router: Router, private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private _dialogRef: MatDialog) { }


  crear() {
    const dialogRef = this._dialogRef.open(CreateNotificationComponent, {
      width: '1000px',
      height: '600px',
      data: { data: 'dato' }
    });
    dialogRef.afterClosed().subscribe(result => {
      // localStorage.removeItem('idActivity');

      // this.getAllActivity();
      

    });
  }

  editar() {
    const dialogRef = this._dialogRef.open(EditNotificationComponent, {
    width: '1000px',
      height: '600px',
      data: { data: 'dato'}
      
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.getAllActivity();

     });
   }




  ngOnInit() {
  }

}
