import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/products';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent {

  productos: Product[] = [];
  constructor(private service: ProductService){

  }

}
