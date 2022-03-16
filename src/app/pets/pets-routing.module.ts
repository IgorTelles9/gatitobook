import { PetsFeedResolver } from './pets-feed/pets-feed.resolver';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetsFeedComponent } from './pets-feed/pets-feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PetsFeedComponent,
    resolve: {
      pets: PetsFeedResolver,
    },
  },
  {
    path: ':petId',
    component: PetDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
