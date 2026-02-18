import { TestBed } from '@angular/core/testing';

import { MangaStore } from './manga-store';

describe('MangaStore', () => {
  let service: MangaStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
