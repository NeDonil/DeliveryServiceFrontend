import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/model/Order';
import { CourierService } from 'src/app/service/courier.service';

@Component({
  selector: 'app-courier-waiting',
  templateUrl: './courier-waiting.component.html' 
})
export class CourierWaitingComponent implements OnInit, OnDestroy{
    orders : Array<Order> | undefined;
    ordersSubscription : Subscription | undefined;

    constructor(private courierService : CourierService) {}
    ngOnInit() : void {
        this.ordersSubscription = this.courierService
            .getOrders()
            .subscribe( (data) => this.orders = data );

    }

    onTakeOrder(order: Order){
        this.courierService.takeOrder(order).subscribe(() => console.log("Take order: " + order.id + " success"));
    }

    ngOnDestroy(): void {
        if(this.ordersSubscription){
            this.ordersSubscription.unsubscribe();
        }
    }
}
