import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-reward',
  templateUrl: './create-reward.component.html',
  styleUrls: ['./create-reward.component.scss']
})
export class CreateRewardComponent implements OnInit {
  files: any;
  disabled: boolean = false;
  constructor() { }
  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }
  ngOnInit() {
  }

}
