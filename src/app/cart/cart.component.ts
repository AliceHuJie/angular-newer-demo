import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = [];
  form: any;

  constructor(private cartService: CartService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initCartItems();
    this.initFormGroup();
  }

  private initFormGroup() {
    this.form = this.fb.group({
      name: '',
      address: ''
    });
  }

  private initCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  submitOrder(value: any) {
    this.cartItems = this.cartService.clearCart();
    this.form.reset();
    window.alert('Your order has been submitted');
  }

}
