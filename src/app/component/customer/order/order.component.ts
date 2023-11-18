import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Order } from 'src/app/model/Order';
import { OrderItem } from 'src/app/model/OrderItem';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit, OnDestroy{

    currentOrder : Order | undefined;
    totalPrice : number | undefined;
    currentOrderSubscription : Subscription | undefined

    constructor(private orderService : OrderService){}

    ngOnInit(): void{
        this.getCurrentOrder();
    }

    getCurrentOrder(){
        this.currentOrderSubscription = this.orderService
            .getCurrentOrder()
            .subscribe((order) => {
                this.currentOrder = order;
                this.totalPrice = this.calcTotalPrice();
            })
    }

    calcTotalPrice(): number {
        let sum = 0;
        if(this.currentOrder && this.currentOrder.items){
            this.currentOrder.items.forEach( (e) => {
                if(e.product && e.count && e.product.price) sum += e.product.price * e.count;
            });
        }

        return sum;
    }

    makeOrder() : void {
        if(this.currentOrder && this.currentOrder.id){
            this.orderService.makeOrder(this.currentOrder.id);
        }
    }

    ngOnDestroy(): void {
        if(this.currentOrderSubscription){
            this.currentOrderSubscription.unsubscribe();
        }
    }

}
