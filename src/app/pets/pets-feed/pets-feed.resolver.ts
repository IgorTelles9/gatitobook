import { UserService } from './../../authenticate/user/user.service';
import { PetService } from './../pet/pet.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { Pets } from '../pet/pet';

@Injectable({
  providedIn: 'root',
})
export class PetsFeedResolver implements Resolve<Pets> {
  constructor(
    private petService: PetService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Pets> {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.petService.userFeed(userName);
      }),
      take(1)
    );
  }
}
