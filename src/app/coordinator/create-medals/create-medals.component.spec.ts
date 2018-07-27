import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedalsComponent } from './create-medals.component';

describe('CreateMedalsComponent', () => {
  let component: CreateMedalsComponent;
  let fixture: ComponentFixture<CreateMedalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMedalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
