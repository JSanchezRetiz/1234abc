import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorRewardComponent } from './coordinator-reward.component';

describe('CoordinatorRewardComponent', () => {
  let component: CoordinatorRewardComponent;
  let fixture: ComponentFixture<CoordinatorRewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorRewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
