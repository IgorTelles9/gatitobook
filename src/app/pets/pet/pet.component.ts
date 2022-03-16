import { environment as env } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  private urlImg = `${env.backendHost}:${env.backendPort}/${env.imgsEndpoint}`;
  private urlDefault = '';

  @Input() description = '';
  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlDefault = url;
    } else {
      this.urlDefault = `${this.urlImg}/${url}`;
    }
  }

  get url(): string {
    return this.urlDefault;
  }

  constructor() {}

  ngOnInit(): void {}
}
