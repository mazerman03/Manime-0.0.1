import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getSeasonalAnimeListNow(): Observable<any> {
    const requestURL = `https://api.jikan.moe/v4/seasons/now`
    return this.http.get(requestURL);
  }

  getTopAnimeList(): Observable<any> {
    const requestURL = `https://api.jikan.moe/v4/top/anime`
    return this.http.get(requestURL);
  }

  getAnimeById(id: number): Observable<any> {
    const requestURL = `https://api.jikan.moe/v4/anime/${id}`
    return this.http.get(requestURL);
  }

  getAnimeNews(): Observable<any> {
    const requestURL = `https://api.jikan.moe/v4/anime/1/news?page=1`
    return this.http.get(requestURL);
  }



}
