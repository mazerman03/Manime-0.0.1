import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeResponse } from 'src/models/anime-data.model';
import { GenreResponse } from 'src/models/genre-data.model';

@Injectable({
  providedIn: 'root'
})
export class JikanService {

  constructor(private http: HttpClient) { }

  getGenreList(): Observable<GenreResponse> {
    const requestURL = 'https://api.jikan.moe/v4/genres/anime';
    return this.http.get<GenreResponse>(requestURL);
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

  getAnimeById(id: number): Observable<any> {
    const requestURL = `https://api.jikan.moe/v4/anime/${id}`
    return this.http.get(requestURL);
  }

  getAnimeNews(): Observable<any> {
    const requestURL = `https://api.jikan.moe/v4/anime/1/news?page=1`
    return this.http.get(requestURL);
  }


  getAnimeSearch(genre_id_filtered: number[]): Observable<AnimeResponse> {
    const requestURL = 'https://api.jikan.moe/v4/anime'
    const requestURLtop = 'https://api.jikan.moe/v4/top/anime'
    if (genre_id_filtered !== null && genre_id_filtered.length > 0) {
      const genreList = genre_id_filtered.join(",");
      const genreQuery = `?genres=${genreList}`
      const requestURL2 = `${requestURL}${genreQuery}`
      return this.http.get<AnimeResponse>(requestURL2);
    }else{
      return this.http.get<AnimeResponse>(requestURLtop);
    }
    
  }
}
