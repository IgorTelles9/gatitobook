import { Router } from '@angular/router';
import { AuthenticateService } from './../../authenticate/authenticate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(
    private authService: AuthenticateService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.auth(this.username, this.password).subscribe({
      next: () => {
        console.log('Successful authenticated');
        this.router.navigate(['pets']);
      },
      error: (error) => {
        console.error(error);
        alert('Username or password invalid');
        this.clearFields();
      },
    });
  }

  clearFields(){
    this.username = '';
    this.password = '';
  }
}
