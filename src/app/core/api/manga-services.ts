import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MangaResponse } from '../../models/magna';
import { CoverArtResponse } from '../../models/cover';

@Injectable({
  providedIn: 'root',
})
export class MangaServices {
  private http = inject(HttpClient)

  url = 'https://mangadex-proxy-lake.vercel.app/api'

  getMangas(offset: number = 0, limit: number = 20 , otherQueries: string = '') {
    return this.http.get<MangaResponse>(`${this.url}/manga?offset=${offset}&limit=${limit}&${otherQueries}`)
  }

  getCover(id: string) {
    return this.http.get<CoverArtResponse>(`${this.url}/cover/${id}`)
  }

}
