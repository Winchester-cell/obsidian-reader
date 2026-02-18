import { Component, signal } from '@angular/core';
import { MangaSlide } from '../../shared/components/manga-slide/manga-slide';
import { Footer } from '../../shared/components/footer/footer';

export interface SlideSectionsConfig {
  headTitle: string,
  imgSrc: string,
  queryOption: string,
}

@Component({
  selector: 'app-home',
  imports: [MangaSlide , Footer],
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
    { headTitle: 'Top Shoujo', imgSrc: '/pumb.svg', queryOption: 'publicationDemographic[]=shoujo&order[followedCount]=desc' },
    { headTitle: 'Top josei', imgSrc: '/pumb2.svg', queryOption: 'publicationDemographic[]=josei&order[followedCount]=desc' },
    { headTitle: 'Top seinen', imgSrc: '/pumb3.svg', queryOption: 'publicationDemographic[]=seinen&order[followedCount]=desc' },
  ])
}
