import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from 'src/store/models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productNumber:string;
  cartContent: Observable<Product[]>;
  isEmpty:Boolean = true;

  constructor(private store:Store, private cartService:CartService) { }

  ngOnInit(): void {
    this.cartContent = this.store.select(state => state.cart.products);
    this.store.select(state => state.cart.products).subscribe(i => this.productNumber = i.length);
    this.cartContent.subscribe(x => { 
      if (x.length > 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
    })
  }

  deleteFromCart(product:Product) {
    this.cartService.delete(product);
  }
}