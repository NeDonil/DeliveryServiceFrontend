import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/model/Order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit, OnDestroy{

    currentOrder : Order | undefined;
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
            })
    }

    ngOnDestroy(): void {
        if(this.currentOrderSubscription){
            this.currentOrderSubscription.unsubscribe();
        }
    }

}
