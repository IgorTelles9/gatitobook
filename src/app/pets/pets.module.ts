import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsFeedComponent } from './pets-feed/pets-feed.component';
import { PetComponent } from './pet/pet.component';


@NgModule({
  declarations: [
    PetsFeedComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }
