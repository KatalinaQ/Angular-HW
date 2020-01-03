import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationTrainingsComponent } from './education-trainings.component';

describe('EducationTrainingsComponent', () => {
  let component: EducationTrainingsComponent;
  let fixture: ComponentFixture<EducationTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
