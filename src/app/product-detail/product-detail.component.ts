import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {products} from "../products";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('id')];
    });
  }

  addToCart() {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.product);
  }

}
