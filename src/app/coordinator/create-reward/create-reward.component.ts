import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-reward',
  templateUrl: './create-reward.component.html',
  styleUrls: ['./create-reward.component.scss']
})
export class CreateRewardComponent implements OnInit {
  files: any;
  disabled: boolean = false;

  constructor(private dialog:TdDialogService, public dialogRef:MatDialogRef<CreateRewardComponent>, private _router: Router, private _viewContainerRef: ViewContainerRef) { }
  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  cerrar(){
    this.dialogRef.close('cerrar');
  }
  ngOnInit() {
  }

}
