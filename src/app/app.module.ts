import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { productsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [productsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
