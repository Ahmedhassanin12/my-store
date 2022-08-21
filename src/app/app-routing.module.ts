import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './comopnents/cart/cart.component';
import { ConfirmationComponent } from './comopnents/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './comopnents/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './comopnents/product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo:'/products', pathMatch:'full'},
  {path:"products", component:ProductListComponent },
  {path:"cart", component:CartComponent},
  {path:"confirm", component:ConfirmationComponent},
  {path:"products/:id", component:ProductItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
