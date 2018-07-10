import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { TdDialogService } from '@covalent/core/dialogs';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
