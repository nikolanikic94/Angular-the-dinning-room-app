import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantList } from './model/Restaurant-list.model';
import { map } from 'rxjs/operators';
import { Menus } from './model/Menus.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantServiceService {
  url: string = 'http://localhost:3000/api/restaurants';

  constructor(private http: HttpClient) {}

  getRestaurants(params): Observable<RestaurantList> {
    let queryParams = {};
    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('filter', (params.filter && JSON.stringify(params.filter)) || '')
          .set('page', (params.page && JSON.stringify(params.page)) || '')
          .set(
            'pageSize',
            (params.pageSize && JSON.stringify(params.pageSize)) || ''
          ),
      };
    }

    return this.http
      .get(this.url, queryParams)
      .pipe(map((elem) => new RestaurantList(elem)));
  }

  getMenu(id: number): Observable<Menus> {
    return this.http
      .get(`${this.url}/${id}/menus`)
      .pipe(map((elem) => new Menus(elem)));
  }
}
