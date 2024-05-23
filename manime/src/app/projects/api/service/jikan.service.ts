import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JikanService {

  constructor(private http: HttpClient) { }

  getGenreList(): Observable<any> {
    const requestURL = 'https://api.jikan.moe/v4/genres/anime';
    return this.http.get(requestURL);
  }

  getSeasonList(year: number, season: string ): Observable<any> {
    const requestURL = `https://api.jikan.moe/v4/seasons/${year}/${season}`
    return this.http.get(requestURL);
  }

  getSeasonListNow(): Observable<any> {
    const requestURL = `https://api.jikan.moe/v4/seasons/now`
    return this.http.get(requestURL);
  }
}
