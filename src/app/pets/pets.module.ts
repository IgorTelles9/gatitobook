import { SharedModule } from './../shared/shared.module';
import { CardModule } from './../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsFeedComponent } from './pets-feed/pets-feed.component';
import { PetComponent } from './pet/pet.component';
import { PetsGridPhotosComponent } from './pets-grid-photos/pets-grid-photos.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { CommentsComponent } from './pet-detail/comments/comments.component';

@NgModule({
  declarations: [
    PetsFeedComponent,
    PetComponent,
    PetsGridPhotosComponent,
    PetDetailComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    CardModule,
    SharedModule
  ],
})
export class PetsModule {}
