import { URLServer } from './../_helpers/URLServer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getCharacters(params: any): Observable<any> {
    const newParams = {
      ...params,
    };
    return this.http.get(
      `${URLServer.characters}?${new URLSearchParams(newParams).toString()}`
    );
  }

  get(id: any, url: string, params: any = {}): Observable<any> {
    const URL = url + '/' + id;
    return this.http.get(URL, { params }).pipe(map(this.extractData));
  }

  list(parametros: any, url: string): Observable<any> {
    return this.http
      .get(url, { params: parametros })
      .pipe(map(this.extractData));
  }

  private extractData = (res: Object): any => {
    return res || {};
  };
}
