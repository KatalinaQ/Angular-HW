import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformationPhotoComponent } from './general-information-photo.component';

describe('GeneralInformationPhotoComponent', () => {
  let component: GeneralInformationPhotoComponent;
  let fixture: ComponentFixture<GeneralInformationPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInformationPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInformationPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
