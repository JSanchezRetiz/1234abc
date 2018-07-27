import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedalsComponent } from './edit-medals.component';

describe('EditMedalsComponent', () => {
  let component: EditMedalsComponent;
  let fixture: ComponentFixture<EditMedalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
