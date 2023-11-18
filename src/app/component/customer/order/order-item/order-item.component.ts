import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { OrderItem } from 'src/app/model/OrderItem';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html'
})
export class OrderItemComponent implements OnInit {
    totalPrice : number | undefined;

    @Input() orderItem: OrderItem | undefined;
    @Output() plusPressed = new EventEmitter();
    @Output() minusPressed = new EventEmitter();

    constructor(public orderService: OrderService){}

    ngOnInit(){
        this.recalcTotalPrice();
    }

    onPlusPressed(): void{
        if(this.orderItem && this.orderItem.product){
            this.orderService.addToOrder(this.orderItem.product);
            this.recalcTotalPrice();
        }
    }

    onMinusPressed(): void{
        if(this.orderItem && this.orderItem.product){
            this.orderService.removeOneFromOrder(this.orderItem.product);
            this.recalcTotalPrice();
        }
    }

    onRemovePressed(): void {
        if(this.orderItem && this.orderItem.product){
            this.orderService.removeFromOrder(this.orderItem.product);
            this.recalcTotalPrice();
        }
    }

    recalcTotalPrice(): void {
        let value : number = 0;
        if(this.orderItem && this.orderItem.count && this.orderItem.product){
            value = this.orderItem.count * this.orderItem.product.price;
        } 
        this.totalPrice = value;
    }


}
