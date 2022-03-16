import { TestBed } from '@angular/core/testing';

import { PetsFeedResolver } from './pets-feed.resolver';

describe('PetsFeedResolver', () => {
  let resolver: PetsFeedResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PetsFeedResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
