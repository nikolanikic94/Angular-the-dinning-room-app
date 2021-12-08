import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/model/Restaurant.model';

import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-restaurant-list-item',
  templateUrl: './restaurant-list-item.component.html',
  styleUrls: ['./restaurant-list-item.component.scss'],
})
export class RestaurantListItemComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor(private modal: NgbModal) {}

  ngOnInit(): void {}

  openModal(): void {
    const modalRef = this.modal.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.restaurant = this.restaurant;
  }
}
