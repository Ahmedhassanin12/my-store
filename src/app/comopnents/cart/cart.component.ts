import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  formValue: FormGroup;
  grandTotal!: number;
  yourName: string = '';
  yourAddress: string = '';
  yourCardNumber: string = '';

  @Output() inputValue: EventEmitter<any> = new EventEmitter;

  constructor(
    private cart: CartService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.products = this.cart.getItems();
    this.grandTotal = this.cart.getTotalPrice();
    // console.log(this.grandTotal);
    // form validation
    this.formValue = this.fb.group({
      yourName: ['', [Validators.required, Validators.minLength(3)]],
      yourAddress: ['', [Validators.required, Validators.minLength(8)]],
      yourCardNumber: [
        '',
        [Validators.required, Validators.pattern(/\d{14}/g)],
      ],
    });
  }

  get allInput() {
    return {
      yourName: this.formValue.get('yourName') as FormGroup,
      yourAddress: this.formValue.get('yourAddress') as FormGroup,
      yourCardNumber: this.formValue.get('yourCardNumber') as FormGroup,
    };
  }

  ngOnInit(): void {
    // this.products = this.cart.getItems()
    // console.log(this.products);
  }

  handelChange(
    e: any,
    prod: Product,
    id: number,
    quantity: number | undefined
  ) {
    if (+e.target.value < 1) {
      e.target.value = 1;
    } else {
      prod.quantity = parseInt(e.target.value);
      this.grandTotal = this.cart.getTotalPrice();
    }
  }
  handelSubmit(value: any) {
    this.router.navigate(['confirm'], {
      state: { ...value, price: this.grandTotal },
      replaceUrl: true,
    });
    this.inputValue.emit({ ...value, price: this.grandTotal })
  }

  remove(product: Product) {
    this.cart.deleteProd(product);
    alert('you removed the item from the cart');
    this.grandTotal = this.cart.getTotalPrice();
  }
}
