import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  priceTo: number = 5;
  priceFrom: number = 1;
  @Output() priceEmmiter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  updatePrice(): void {
    this.priceEmmiter.emit({
      priceTo: this.priceTo,
      priceFrom: this.priceFrom,
    });
  }
}
