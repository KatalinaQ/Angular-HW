import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformationAddressComponent } from './general-information-address.component';

describe('GeneralInformationAddressComponent', () => {
  let component: GeneralInformationAddressComponent;
  let fixture: ComponentFixture<GeneralInformationAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInformationAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInformationAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
