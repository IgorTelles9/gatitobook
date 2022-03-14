import { AbstractControl } from '@angular/forms';
import { SignupService } from './signup.service';
import { Injectable } from '@angular/core';
import { switchMap, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserExistsService {
  constructor(private SignupService: SignupService) {}

  userExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((username) =>
          this.SignupService.usernameExistsChecker(username)
        ),
        map((userExists) => (userExists ? { userExists: true } : null)),
        first()
      );
    };
  }
}
