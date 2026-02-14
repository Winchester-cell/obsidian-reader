import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaSlide } from './manga-slide';

describe('MangaSlide', () => {
  let component: MangaSlide;
  let fixture: ComponentFixture<MangaSlide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangaSlide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaSlide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
