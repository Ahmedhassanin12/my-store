import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []
  constructor() { }
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.items.map((a:any)=>{
      grandTotal += a.price * a.quantity;
    })
    return grandTotal;
  }
}
