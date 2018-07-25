import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { activityDto } from '../../challenges/models/activityDto';
import { CoordinatorService } from '../services/coordinator.service';
import { ChallengesService } from '../../challenges/services/challenges.service';


@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss'],
  providers: [ChallengesService,CoordinatorService],

})
export class CreateActivityComponent implements OnInit {
acivity: activityDto;


  constructor(private challengesSVC:ChallengesService, private coordinadorSVC:CoordinatorService) {
this.acivity= new activityDto();

   }

  ngOnInit() {
  }

}
