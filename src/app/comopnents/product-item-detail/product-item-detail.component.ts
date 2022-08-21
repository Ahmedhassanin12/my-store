import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { GetProductService } from 'src/app/services/get-product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product | undefined;
  quantity:number = 1

  constructor(
    private route: ActivatedRoute,
    private getProducts: GetProductService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    console.log(productIdFromRoute);
    // Find the product that correspond with the id provided in route.
    this.getProducts.getAllProduct().subscribe((res) => {
      this.product = res.find((prod) => prod.id === productIdFromRoute);
    });
  }

  getNumber(event:any){
    this.quantity = parseInt(event.target.value)
 }

  addToCart(prod: Product, quantity: number) {
    this.cart.addToCart({ ...prod, quantity });
    alert('Your product has been added to the cart!');
  }
}
