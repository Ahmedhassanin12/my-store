import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private http:HttpClient) { }
  getAllProduct():Observable<Product[]> {
      return this.http.get<Product[]>("../../assets/data.json")
  }
}
