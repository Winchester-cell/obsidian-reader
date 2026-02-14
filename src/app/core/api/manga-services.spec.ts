import { TestBed } from '@angular/core/testing';

import { MangaServices } from './manga-services';

describe('MangaServices', () => {
  let service: MangaServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
