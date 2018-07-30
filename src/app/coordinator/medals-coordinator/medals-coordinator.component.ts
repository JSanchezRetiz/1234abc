import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdLoadingService } from '@covalent/core/loading';
import { TdDialogService } from '@covalent/core/dialogs';
import { Router } from '@angular/router';
import { ChallengesService } from '../../challenges/services/challenges.service';
import { LoginService } from '../../login/service/login.service';
import { CreateMedalsComponent } from '../create-medals/create-medals.component';
import { EditMedalsComponent } from '../edit-medals/edit-medals.component';
import { medalDto } from '../models/medalDto';
import { CoordinatorService } from '../services/coordinator.service';
import { storage } from '../../../../node_modules/firebase';

@Component({
  selector: 'app-medals-coordinator',
  templateUrl: './medals-coordinator.component.html',
  styleUrls: ['./medals-coordinator.component.scss'],
  providers: [TdLoadingService, ChallengesService, LoginService, CoordinatorService,TdDialogService],
})
export class MedalsCoordinatorComponent implements OnInit {
  medals: medalDto[];
  medal: medalDto;



  constructor(private coordinatorSVC: CoordinatorService, private loginSVC: LoginService, private _loadingService: TdLoadingService, private challengesSVC: ChallengesService, private _router: Router, private _dialogService: TdDialogService, private _viewContainerRef: ViewContainerRef, private _dialogRef: MatDialog) {
    this.medals = new Array<medalDto>();
    this.medal = new medalDto();
  }
  crear(dato: medalDto): void {
    const dialogRef = this._dialogRef.open(CreateMedalsComponent, {
      width: '1000px',
      height: '600px',
      data: { data: dato }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllMedals();
    });
  }

  getAllMedals() {
    this.coordinatorSVC.getAllMedals().then(res => {
      this.medals = res;
      console.log(res);
    })
  }

   editar(dato: medalDto) {
    console.log("id", dato.id)
    localStorage.setItem('id', dato.id);
    const dialogRef = this._dialogRef.open(EditMedalsComponent, {
    width: '1000px',
      height: '600px',
      data: { data: dato}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllMedals();

     });
   }

  Volver() {
    this._router.navigate(["perfil-coordinador"]);
  }

  Confirmar(dato:medalDto): void {
    this._dialogService.openConfirm({
      message: 'Esta seguro de eliminar esta medalla?',
     disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
       title: 'Atencion:', //OPTIONAL, hides if not provided
      cancelButton: 'Cancelar', //OPTIONAL, defaults to 'CANCEL'
      acceptButton: 'Confirmar', //OPTIONAL, defaults to 'ACCEPT'
      width: '500px', //OPTIONAL, defaults to 400px
     }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
         this.eliminar(dato)
      } else {
        this.cerrar();
      }
    });
   }

  cerrar() {
    this._dialogRef.closeAll();
  }

  eliminar(dato: medalDto) {
    this._loadingService.register();
    console.log("id", dato)
    localStorage.setItem('id', dato.id);
    this.coordinatorSVC.deleteMedal(dato).then(res =>{
      this.medal= res;
      console.log(res);
      this.getAllMedals();
      this._loadingService.resolve();
    })
  }
  ngOnInit() {
    this.getAllMedals();

  }

}
