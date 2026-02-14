import { Component, signal } from '@angular/core';
import { MangaSlide } from '../../shared/components/manga-slide/manga-slide';

export interface SlideSectionsConfig {
  headTitle: string,
  imgSrc: string,
  queryOption: string,
}

@Component({
  selector: 'app-home',
  imports: [MangaSlide],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  slideSections = signal<SlideSectionsConfig[]>([
    { headTitle: 'Updated Recently', imgSrc: '/pumb.svg', queryOption: '' },
    { headTitle: 'Popular Mangas', imgSrc: '/pumb2.svg', queryOption: 'order[followedCount]=desc&status[]=ongoing' },
    { headTitle: 'Top Rated', imgSrc: '/pumb3.svg', queryOption: 'order[rating]=desc' },
    { headTitle: 'Completed Series', imgSrc: '/pumb.svg', queryOption: 'status[]=completed&order[followedCount]=desc' },
    { headTitle: 'New Releases', imgSrc: '/pumb2.svg', queryOption: 'order[createdAt]=desc' },
    { headTitle: 'Top Shounen', imgSrc: '/pumb3.svg', queryOption: 'publicationDemographic[]=shounen&order[followedCount]=desc' },
  ])
}
