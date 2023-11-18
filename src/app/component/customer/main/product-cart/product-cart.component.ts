import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html'
})
export class ProductCartComponent{
    @Input() product: Product | undefined;
}
