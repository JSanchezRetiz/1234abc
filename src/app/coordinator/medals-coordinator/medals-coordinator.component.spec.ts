import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsCoordinatorComponent } from './medals-coordinator.component';

describe('MedalsCoordinatorComponent', () => {
  let component: MedalsCoordinatorComponent;
  let fixture: ComponentFixture<MedalsCoordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedalsCoordinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalsCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
