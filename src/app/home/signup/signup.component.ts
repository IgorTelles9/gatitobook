import { Router } from '@angular/router';
import { UserExistsService } from './user-exists.service';
import { lowercasedValidator } from './lowercased.validator';
import { NewUser } from './new-user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { usernamePasswordSame } from './username-password-same.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private UserExistsService: UserExistsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        userName: [
          '',
          [Validators.required, lowercasedValidator],
          [this.UserExistsService.userExists()],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: [usernamePasswordSame],
      }
    );
  }

  signup() {
    if (this.signupForm.valid) {
      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signupService.signup(newUser).subscribe({
        next: () => {
          this.router.navigate(['']);
          console.log(newUser);
        },
        error: (e) => console.error(e)
      });
    }
  }
}
