import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../model/Menu.model';
import { Menus } from '../model/Menus.model';
import { Restaurant } from '../model/Restaurant.model';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() restaurant: Restaurant;
  weekdays = [];
  menu: Menu;

  constructor(private restaurantService: RestaurantServiceService) {}

  ngOnInit(): void {
    this.weekdays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    this.restaurantService.getMenu(this.restaurant._id).subscribe((elem) => {
      this.menu = elem.results[0];
    });

    console.log(this.restaurant._id);
  }
}
