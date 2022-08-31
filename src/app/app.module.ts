import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './comopnents/cart/cart.component';
import { ConfirmationComponent } from './comopnents/confirmation/confirmation.component';
import { ProductListComponent } from './comopnents/product-list/product-list.component';
import { ProductItemComponent } from './comopnents/product-item/product-item.component';
import { ProductItemDetailComponent } from './comopnents/product-item-detail/product-item-detail.component';

import { HeaderComponent } from './comopnents/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
