import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { Anime, AnimeResponse } from 'src/models/anime-data.model';
import { GenreResponse } from 'src/models/genre-data.model';
import { ModelPageComponent } from 'src/app/projects/component/model-page/model-page.component';

@Injectable({
  providedIn: 'root'
})
export class JikanService {
  currentModel: any[] = [];
  libraryListContainer: number[] = [];
  constructor(private http: HttpClient, public modalController: ModalController) { }

  getGenreList(): Observable<GenreResponse> {
    const requestURL = 'https://api.jikan.moe/v4/genres/anime';
    return this.http.get<GenreResponse>(requestURL);
  }

  getLibraryListTEST(): number[] {
    console.log(this.libraryListContainer);
    return this.libraryListContainer;
  }
    

  getSeasonalAnimeList(year: number, season: string ): Observable<any> {
    const requestURL = `https://api.jikan.moe/v4/seasons/${year}/${season}`
    return this.http.get(requestURL);
  }

  getSeasonalAnimeListNow(page: number): Observable<AnimeResponse> {

      const requestURL = 'https://api.jikan.moe/v4/seasons/now?filter=tv&sfw'
      const pageQuery = `&page=${page}`
      const requestURL2 = `${requestURL}${pageQuery}`
      return this.http.get<AnimeResponse>(requestURL2);
  } 

  getTopAnimeList(): Observable<AnimeResponse> {
    const requestURL = `https://api.jikan.moe/v4/top/anime`
    return this.http.get<AnimeResponse>(requestURL);
  }

  getAnimeById(id: number): Observable<Anime> {
    const requestURL = `https://api.jikan.moe/v4/anime/${id}`
    return this.http.get<Anime>(requestURL);
  }

  getAnimeNews(): Observable<any> {
    const requestURL = `https://api.jikan.moe/v4/anime/1/news?page=1`
    return this.http.get(requestURL);
  }
  getAnimeTestLibrary(): Observable<AnimeResponse> {
    const URLquery = 'https://api.jikan.moe/v4/anime/?page=1&genres=2';
    return this.http.get<AnimeResponse>(URLquery);
  }

  getAnimeSearch(page: number,genre_id_filtered: number[]): Observable<AnimeResponse> {
    const requestURL = `https://api.jikan.moe/v4/anime?page=${page}`
    const requestURLtop = `https://api.jikan.moe/v4/top/anime?page=${page}`
    if (genre_id_filtered !== null && genre_id_filtered.length > 0) {
      const genreList = genre_id_filtered.join(",");
      const genreQuery = `&genres=${genreList}&order_by=popularity&sort=asc`
      const requestURL2 = `${requestURL}${genreQuery}`
      return this.http.get<AnimeResponse>(requestURL2);
    }else{
      return this.http.get<AnimeResponse>(requestURLtop);
    }
    
  }

/*   async presentModal(modelItem: Anime) {
    const modal = await this.modalController.create({
      component: ModelPageComponent,
      componentProps:{ modelItemList: modelItem}
    });

    this.currentModel.push(modal);
    return await modal.present();
  }

 
  dismissModel() {
    this.currentModel[this.currentModel.length - 1].dismiss().then(() => { this.currentModel.pop(); });
  } */

  async presentModal(modelItem: Anime) {
    const modal = await this.modalController.create({
      component: ModelPageComponent,
      componentProps: { modelItemList: modelItem }
    });
    return await modal.present();
  }

  dismissModel() {
    this.modalController.dismiss().then((result) => {
      console.log('Modal dismissed', result);
    }).catch((error) => {
      console.error('Error dismissing modal', error);
    });
  }
}
