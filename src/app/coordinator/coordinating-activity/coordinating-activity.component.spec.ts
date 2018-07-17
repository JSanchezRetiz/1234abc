import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatingActivityComponent } from './coordinating-activity.component';

describe('CoordinatingActivityComponent', () => {
  let component: CoordinatingActivityComponent;
  let fixture: ComponentFixture<CoordinatingActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatingActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatingActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
