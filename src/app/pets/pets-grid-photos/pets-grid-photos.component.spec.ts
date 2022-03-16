import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsGridPhotosComponent } from './pets-grid-photos.component';

describe('PetsGridPhotosComponent', () => {
  let component: PetsGridPhotosComponent;
  let fixture: ComponentFixture<PetsGridPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsGridPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsGridPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
