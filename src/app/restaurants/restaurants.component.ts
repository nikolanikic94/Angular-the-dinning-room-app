import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../model/Restaurant.model';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  numberOfRestaurants: number;

  parameters = {
    filter: {
      priceFrom: 0,
      priceTo: 5,
      cuisine: '',
    },
    page: 1,
    pageSize: 12,
  };

  constructor(
    private service: RestaurantServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((elem) => {
      let cuisine = elem['cuisine'] == 'All' ? '' : elem['cuisine'];
      this.parameters.filter.cuisine = cuisine;
      console.log(cuisine);
      this.updateRestaurants();
    });
  }

  updateRestaurants(): void {
    this.service.getRestaurants(this.parameters).subscribe((elem) => {
      this.restaurants = elem.resluts;
      this.numberOfRestaurants = elem.count;
    });
  }

  updateParams(value?) {
    console.log(value);
    this.parameters.page = value.page;
    this.parameters.filter.priceFrom = value.priceFrom;
    this.parameters.filter.priceTo = value.priceTo;

    console.log(value);

    this.updateRestaurants();
  }
}
