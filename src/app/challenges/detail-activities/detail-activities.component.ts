import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-detail-activities',
  templateUrl: './detail-activities.component.html',
  styleUrls: ['./detail-activities.component.scss'],
  providers: [TdDialogService],
})
export class DetailActivitiesComponent implements OnInit {

  constructor(private dialog:TdDialogService, public dialogRef:MatDialogRef<DetailActivitiesComponent>) { }


  cerrar(){
    this.dialogRef.close('cerrar');
  }

  ngOnInit() {
  }

}
