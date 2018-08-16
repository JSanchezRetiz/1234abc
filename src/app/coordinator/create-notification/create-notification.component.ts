import { Component, OnInit } from '@angular/core';
import { notificationDto } from '../models/notificationDto';
import { CoordinatorService } from '../services/coordinator.service';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdLoadingService } from '@covalent/core/loading';
import { activityDto } from '../../challenges/models/activityDto';
import { ChallengesService } from '../../challenges/services/challenges.service';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss'],
  providers: [CoordinatorService, TdLoadingService, ChallengesService],
})
export class CreateNotificationComponent implements OnInit {
  notificationSend: notificationDto;
  fecha1: Date;
  endTime: Date;
  allActivity: activityDto[];
  notificationAllUser: boolean;

  constructor(private challengesSVC: ChallengesService, private _loadingService: TdLoadingService, private dialog: TdDialogService, public dialogRef: MatDialogRef<CreateNotificationComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef, private coordinatorSVC: CoordinatorService) {
    this.notificationSend = new notificationDto();
  }

  public getAllActivity() {
    this.challengesSVC.getAllActivy().then(res => {
      this.allActivity = res;
    })
  }

  createNotification() {
    console.log("booleano", this.notificationAllUser)
    if (this.notificationAllUser == true) {
      this.notificationSend.allUser = "Todos"
    } else {
      this.notificationSend.allUser = "None";
    }
    this._loadingService.register();
    console.log("aaaa", this.notificationSend);
    this.coordinatorSVC.createNotification(this.notificationSend).then(res => {
      this.notificationSend = res;
      console.log(res);
      this._loadingService.resolve();
      this.guardar();
    })
  }

  guardar() {
    this.dialog.openAlert({
      message: 'Se ha creado la notificacion adecuadamente',
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
  }

  ngOnInit() {
    this.getAllActivity();
  }

}
