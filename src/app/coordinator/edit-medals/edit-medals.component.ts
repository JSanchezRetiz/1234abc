import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-medals',
  templateUrl: './edit-medals.component.html',
  styleUrls: ['./edit-medals.component.scss']
})
export class EditMedalsComponent implements OnInit {

  constructor(private dialog:TdDialogService, public dialogRef:MatDialogRef<EditMedalsComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef) { }

  cerrar(){
    this.dialogRef.close('cerrar');
  }

  ngOnInit() {
  }

}
