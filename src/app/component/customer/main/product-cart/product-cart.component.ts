import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html'
})
export class ProductCartComponent implements OnInit{
    @Input() product: Product | undefined;

    constructor(){}

    ngOnInit(): void{

    }

    @Output() addToOrder = new EventEmitter();

    onAddToOrder(): void{
        this.addToOrder.emit(this.product);
    }

}
