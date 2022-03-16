import { Pets } from './../pet/pet';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets-grid-photos',
  templateUrl: './pets-grid-photos.component.html',
  styleUrls: ['./pets-grid-photos.component.css']
})
export class PetsGridPhotosComponent implements OnInit {
  @Input() pets !: Pets
  constructor() { }

  ngOnInit(): void {
  }

}
