import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-list',
  templateUrl: '../templates/list.component.html',

})
export class ListComponent implements OnInit {

  constructor(private productService: ProductService) {
  }
  products: Product[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }
}
