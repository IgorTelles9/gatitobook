import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PetService } from './../pet/pet.service';
import { UserService } from './../../authenticate/user/user.service';
import { Pets } from './../pet/pet';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pets-feed',
  templateUrl: './pets-feed.component.html',
  styleUrls: ['./pets-feed.component.css'],
})
export class PetsFeedComponent implements OnInit {
  pets!: Pets;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (param) => {
        this.pets = this.activatedRoute.snapshot.data['pets']
      }
    })
  }
}
