import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { productsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productName: any;
  @Output() productClicked =   new EventEmitter();

  constructor(private productsService: productsService) { }

  ngOnInit(): void {
  }

  onClicked() {
    // this.productClicked.emit();
    this.productsService.deleteProduct(this.productName);
  }

}

