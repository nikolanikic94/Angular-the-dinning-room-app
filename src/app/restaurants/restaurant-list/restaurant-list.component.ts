import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/model/Restaurant.model';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
  @Input() restaurants: Restaurant[];

  constructor() {}

  ngOnInit(): void {}
}
