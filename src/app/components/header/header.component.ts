import { Router } from '@angular/router';
import { UserService } from './../../authenticate/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$ = this.userService.getUser();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }
  logout(){
    this.userService.logout();
    this.router.navigate(['']);
  }
}
