import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { productsService } from "./products.service";
import { Subscription } from "rxjs/internal/Subscription";

@Component({
    selector: 'app-products',
    templateUrl: 'products.component.html'
})

export class ProductsComponent implements OnInit, OnDestroy{
    productName = 'A Book';
    isDisabled = true;
    // products = ['A book','A Tree']; 
    products: string[] = [];
    private productsSubscription: Subscription | undefined;

    constructor(private productsService: productsService) { 
      setTimeout(()=>{
        this.isDisabled = false;
      },3000);
    }
    
    ngOnInit(): void {
      this.products = this.productsService.getProduct();
      this.productsSubscription = this.productsService.productsUpdated.subscribe(()=>{
        this.products = this.productsService.getProduct();
      });
      console.log(this.products);
    }

    onAddProduct(form: NgForm){
      console.log(form);
      // this.products.push(this.productName);
      if(form.valid){
        //this.products.push(form.value.productName);
        this.productsService.addProduct(form.value.productName);
      }

    }

    onRemoveProduct(productName: string) {
        this.products = this.products.filter(p => p !== productName);
    }

    ngOnDestroy(): void {
        this.productsSubscription?.unsubscribe();
    }
}