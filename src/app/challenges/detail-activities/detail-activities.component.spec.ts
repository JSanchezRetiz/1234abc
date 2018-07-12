import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailActivitiesComponent } from './detail-activities.component';

describe('DetailActivitiesComponent', () => {
  let component: DetailActivitiesComponent;
  let fixture: ComponentFixture<DetailActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
