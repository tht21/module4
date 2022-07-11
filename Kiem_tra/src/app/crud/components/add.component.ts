import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: '../templates/add.component.html',

})
export class AddComponent implements OnInit {

  constructor(private productService: ProductService, private Router:Router) { }

  ngOnInit(): void {
  }

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  submit() {
    const product = this.productForm.value;
    this.productService.storeProduct(product);
  //  this.productForm.reset();
    this.Router.navigate(['/list']);
  }
}
