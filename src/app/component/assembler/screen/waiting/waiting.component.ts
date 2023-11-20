import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/model/Order';
import { AssemblerService } from 'src/app/service/assembler.service';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html'
})

export class WaitingComponent implements OnInit, OnDestroy {

    orders : Array<Order> | undefined;
    ordersSubscription : Subscription | undefined;

    constructor(private assemblerService : AssemblerService) {}
    ngOnInit() : void {
        this.ordersSubscription = this.assemblerService
            .getOrders()
            .subscribe( (data) => this.orders = data );

    }

    onTakeOrder(order: Order){
        this.assemblerService.takeOrder(order).subscribe(() => console.log("Take order: " + order.id + " success"));
    }

    ngOnDestroy(): void {
        if(this.ordersSubscription){
            this.ordersSubscription.unsubscribe();
        }
    }


}
