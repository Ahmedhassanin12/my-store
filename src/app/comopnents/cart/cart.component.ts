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
  formValue!:FormGroup
  grandTotal!: number;
  yourName:string = ''
  yourAddress:string=''
  yourCardNumber:string =''
  constructor(private cart: CartService, private router:Router) {
    this.products = this.cart.getItems();
    this.grandTotal = this.cart.getTotalPrice();
    console.log(this.grandTotal);
  }

  ngOnInit(): void {
    // this.products = this.cart.getItems()
    // console.log(this.products);
  }
  handelSubmit(value:any){
    this.router.navigate(["confirm"], {state: {...value , price: this.grandTotal}, replaceUrl: true})
  }
}