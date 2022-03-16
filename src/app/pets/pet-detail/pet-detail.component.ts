import { PetService } from './../pet/pet.service';
import { Pet } from './../pet/pet';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css'],
})
export class PetDetailComponent implements OnInit {
  petId!: number;
  pet$!: Observable<Pet>;
  constructor(
    private petService: PetService,
    private activetedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.petId = this.activetedRoute.snapshot.params['petId'];
    this.pet$ = this.petService.searchById(this.petId);
  }

  like() {
    this.petService.like(this.petId).subscribe({
      next: (liked) => {
        if (liked) {
          this.pet$ = this.petService.searchById(this.petId);
        }
      },
      error: (error) => console.error(error),
    });
  }

  delete() {
    this.petService.deletePet(this.petId).subscribe({
      next: () => this.router.navigate(['/pets/']),
      error: (error) => console.error(error),
    });
  }
}
