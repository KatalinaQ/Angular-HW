import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentsItemComponent } from './employments-item.component';

describe('EmploymentsItemComponent', () => {
  let component: EmploymentsItemComponent;
  let fixture: ComponentFixture<EmploymentsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
