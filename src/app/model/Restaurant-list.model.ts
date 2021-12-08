import { Restaurant } from './Restaurant.model';

export class RestaurantList {
  count: number;
  resluts: Restaurant[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.resluts =
      (obj && obj.results.map((elem) => new Restaurant(elem))) || [];
  }
}
