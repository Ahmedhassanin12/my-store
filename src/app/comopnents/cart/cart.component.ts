import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  formValue!: FormGroup;
  grandTotal!: number;
  yourName: string = '';
  yourAddress: string = '';
  yourCardNumber: string = '';
  constructor(private cart: CartService, private router: Router) {
    this.products = this.cart.getItems();
    this.grandTotal = this.cart.getTotalPrice();
    console.log(this.grandTotal);
  }

  ngOnInit(): void {
    // this.products = this.cart.getItems()
    // console.log(this.products);
  }



  handelChange(e: any,prod:Product, id: number, quantity: number | undefined) {
    if (+e.target.value < 1) {
      e.target.value = 1;
    } else {
      prod.quantity = parseInt(e.target.value);
      this.grandTotal = this.cart.getTotalPrice()
    }

  }
  handelSubmit(value: any) {
    this.router.navigate(['confirm'], {
      state: { ...value, price: this.grandTotal },
      replaceUrl: true,
    });
  }

  remove(product: Product) {
    this.cart.deleteProd(product);
    alert('you removed the item from the cart');
    this.grandTotal = this.cart.getTotalPrice()
  }
}
