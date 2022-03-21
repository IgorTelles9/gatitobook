import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isOpened = false;
  constructor() {}

  ngOnInit(): void {}

  menuOpen() {
    this.isOpened = !this.isOpened;
  }
}
