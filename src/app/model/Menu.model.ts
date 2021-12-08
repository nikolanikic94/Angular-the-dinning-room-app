export class Menu {
  _id: number;
  restaurants: number;
  items: Item[];

  constructor(obj?: any) {
    this._id = (obj && obj._id) || null;
    this.restaurants = (obj && obj.restaurants) || null;
    this.items = (obj && obj.items) || {};
  }
}

class Item {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
