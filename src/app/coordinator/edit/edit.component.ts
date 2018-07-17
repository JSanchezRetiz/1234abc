import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private dialog:TdDialogService, public dialogRef:MatDialogRef<EditComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef) { }

  cerrar(){
    this.dialogRef.close('cerrar');
  }

  ngOnInit() {
  }

}
