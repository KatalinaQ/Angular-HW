import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeneralInformationComponent } from './components/general-information/general-information.component';
import { GeneralInformationAddressComponent } from './components/general-information-address/general-information-address.component';
import { GeneralInformationPhotoComponent } from './components/general-information-photo/general-information-photo.component';
import { EducationTrainingsComponent } from './components/education-trainings/education-trainings.component';
import { EducationTrainingsItemComponent } from './components/education-trainings-item/education-trainings-item.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsItemComponent } from './components/skills-item/skills-item.component';
import { EmploymentsComponent } from './components/employments/employments.component';
import { EmploymentsItemComponent } from './components/employments-item/employments-item.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsItemComponent } from './components/projects-item/projects-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    HeaderComponent,
    FooterComponent,
    GeneralInformationComponent,
    GeneralInformationAddressComponent,
    GeneralInformationPhotoComponent,
    EducationTrainingsComponent,
    EducationTrainingsItemComponent,
    SkillsComponent,
    SkillsItemComponent,
    EmploymentsComponent,
    EmploymentsItemComponent,
    ProjectsComponent,
    ProjectsItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
