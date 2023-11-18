import { Component, Input, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/model/OrderItem';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html'
})
export class OrderItemComponent implements OnInit {
    totalPrice : number | undefined;

    @Input() orderItem: OrderItem | undefined;

    ngOnInit(){
        let value : number = 0;
        if(this.orderItem && this.orderItem.count && this.orderItem.product){
            value = this.orderItem.count * this.orderItem.product.price;
        } 
        this.totalPrice = value;
    }
}
