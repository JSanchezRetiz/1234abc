import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorNotificationComponent } from './coordinator-notification.component';

describe('CoordinatorNotificationComponent', () => {
  let component: CoordinatorNotificationComponent;
  let fixture: ComponentFixture<CoordinatorNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
