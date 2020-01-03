import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-information-photo',
  templateUrl: './general-information-photo.component.html',
  styleUrls: ['./general-information-photo.component.css']
})
export class GeneralInformationPhotoComponent implements OnInit {
  ngOnInit(): void {
  }
 photoUrl: string;
  constructor() { 
    this.photoUrl='assets/images/images.jpg'
  }

}
