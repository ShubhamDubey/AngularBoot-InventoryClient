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
    this.products = this.productService.getProductList();
  }

  reloadData() {
    this.products = this.productService.getProductList();
  }

  productDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  editProduct(id: number) {
    this.router.navigate(['update', id])
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(data => { console.log(data); this.reloadData(); }, error => console.log(error));
  }

}