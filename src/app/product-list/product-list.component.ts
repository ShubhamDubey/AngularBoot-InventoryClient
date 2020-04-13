import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Product } from "../product";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getProductList();

  }

}
