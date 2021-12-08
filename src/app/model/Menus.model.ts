import { Menu } from './Menu.model';

export class Menus {
  conut: number;
  results: Menu[];

  constructor(obj?: any) {
    this.conut = (obj && obj.count) || null;
    this.results = (obj && obj.results) || [];
  }
}
