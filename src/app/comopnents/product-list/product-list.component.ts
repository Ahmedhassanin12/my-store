import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { GetProductService } from 'src/app/services/get-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[] = []
  quantity:number = 1
  constructor(private getProducts:GetProductService, private cart:CartService) { }

  ngOnInit(): void {
    this.getProducts.getAllProduct().subscribe((res)=>{
      this.products = res
    })
  }
  getNumber(event:any){
     this.quantity = parseInt(event.target.value)
  }
  addToCart(prod:Product, quantity:number){
    this.cart.addToCart({...prod, quantity});
    alert('Your product has been added to the cart!');
  }

}
