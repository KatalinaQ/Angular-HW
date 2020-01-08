import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationTrainingsItemComponent } from './education-trainings-item.component';

describe('EducationTrainingsItemComponent', () => {
  let component: EducationTrainingsItemComponent;
  let fixture: ComponentFixture<EducationTrainingsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationTrainingsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationTrainingsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
