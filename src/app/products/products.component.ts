import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CartAction } from 'src/store/actions/cart.action';
import { Product } from 'src/store/models/product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[];

  constructor(private productsService:ProductsService, private cartService:CartService) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(x => {
     this.products = x; 
    });
  }

  addToCart(product:Product) {
    this.cartService.add(product);
  }
}