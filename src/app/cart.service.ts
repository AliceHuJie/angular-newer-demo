import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products = [];

  constructor(private http: HttpClient) {
  }

  clearCart() {
    this.products = [];
    return this.products;
  }

  getShippingItems() {
    return this.http.get('/assets/shipping.json');
  }

  addToCart(product: any) {
    this.products.push(product);
  }

  getCartItems() {
    return this.products;
  }
}
