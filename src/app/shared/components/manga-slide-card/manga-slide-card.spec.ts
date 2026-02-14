import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaSlideCard } from './manga-slide-card';

describe('MangaCard', () => {
  let component: MangaSlideCard;
  let fixture: ComponentFixture<MangaSlideCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangaSlideCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaSlideCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
