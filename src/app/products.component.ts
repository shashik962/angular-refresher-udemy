import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-products',
    templateUrl: 'products.component.html'
})

export class ProductsComponent {
    productName = 'A Book';
    isDisabled = true;
    products = ['A book','A Tree'];

    constructor() { 
      setTimeout(()=>{
          this.isDisabled = false;
      },3000);
    }
  
    ngOnInit(): void {

    }

    onAddProduct(form: NgForm){
      // this.products.push(this.productName);
      console.log(form);
      if(form.valid){
        this.products.push(form.value.productName);
      }

    }

    onRemoveProduct(productName: string) {
        this.products = this.products.filter(p => p !== productName);
    }


}