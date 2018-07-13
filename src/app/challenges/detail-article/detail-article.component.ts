import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChallengesService } from '../services/challenges.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss'],
  providers: [TdDialogService, ChallengesService],
})
export class DetailArticleComponent implements OnInit {
  constructor(private dialog: TdDialogService, public dialogRef: MatDialogRef<DetailArticleComponent>, private challengesSVC: ChallengesService) {
  }

  cerrar() {
    this.dialogRef.close('cerrar');
  }

  ngOnInit() {
  }


}
