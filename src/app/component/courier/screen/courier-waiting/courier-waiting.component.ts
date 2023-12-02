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
        this.courierService
            .getOrders()
            .subscribe((data) => {
                this.orders = data;
                this.ordersSubscription = this.courierService.getOrdersSubscription()
                    .subscribe((msg) => this.updateOrders(JSON.parse(msg.body)))
            });
    }

    updateOrders(msg : any) : void {
        if(msg.code == "TO_ASSEMBLED"){
            this.orders?.push(msg.order);
        } else {
            this.orders = this.orders?.filter(el => {
                return el.id !== msg.order.id;
            });
        }
    }

    onTakeOrder(order: Order){
        this.courierService.takeOrder(order);
    }

    ngOnDestroy(): void {
        if(this.ordersSubscription){
            this.ordersSubscription.unsubscribe();
        }
    }
}
