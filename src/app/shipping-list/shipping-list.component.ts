import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-shipping-list',
  templateUrl: './shipping-list.component.html',
  styleUrls: ['./shipping-list.component.scss']
})
export class ShippingListComponent implements OnInit {
  items: any;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.initItems();
  }

  initItems() {
    this.items = this.cartService.getShippingItems();
  }
}
