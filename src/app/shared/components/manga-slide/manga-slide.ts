import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input, OnInit, signal } from '@angular/core';
import { MangaItem } from '../../../models/magna';
import { MangaServices } from '../../../core/api/manga-services';
import { catchError } from 'rxjs';
import { SlideSectionsConfig } from '../../../pages/home/home';
import { MangaSlideCard } from '../manga-slide-card/manga-slide-card';

@Component({
  selector: 'app-manga-slide',
  imports: [MangaSlideCard],
  templateUrl: './manga-slide.html',
  styleUrl: './manga-slide.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MangaSlide implements OnInit {

  mangas = signal<MangaItem[]>([])

  mangaservices = inject(MangaServices)

  options = input<SlideSectionsConfig>()

  ngOnInit() {
    this.mangaservices.getMangas(0, 20, this.options()?.queryOption)
      .pipe(
        catchError((err) => {
          console.log(err)
          return []
        })
      )
      .subscribe({
        next: (data) => {
          this.mangas.set(data.data)
        }
      })
  }

}
