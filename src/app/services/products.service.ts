import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../store/models/product';
import { filter, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = environment.backendProduct;

  constructor(private http:HttpClient, private store:Store) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<any>(this.url).pipe(map(x => {
      return x.find(i => i.name === id);
    }))
  }
}