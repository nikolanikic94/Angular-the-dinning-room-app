export class Restaurant {
  name: string;
  cuisine: string;
  _id: number;
  description: string;
  location: string;
  price: number;
  days: Day[];
  rating: number;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || null;
    this.name = (obj && obj.name) || '';
    this.cuisine = (obj && obj.cuisine) || '';
    this.description = (obj && obj.description) || '';
    this.location = (obj && obj.location) || '';
    this.price = (obj && obj.price) || null;
    this.days = (obj && obj.days) || [];
    this.rating = (obj && obj.rating) || null;
  }
}

class Day {
  closes: string;
  opens: string;

  constructor(closes: string, opens, string) {
    this.closes = closes;
    this.opens = opens;
  }
}
