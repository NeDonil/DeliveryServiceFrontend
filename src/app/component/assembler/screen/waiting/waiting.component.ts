import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Order} from 'src/app/model/Order';
import {AssemblerService} from 'src/app/service/assembler.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html'
})

export class WaitingComponent implements OnInit, OnDestroy {

    orders : Array<Order> | undefined;
    ordersSubscription : Subscription | undefined;

    constructor(private assemblerService : AssemblerService,
                private router: Router) {}
    ngOnInit() : void {
        this.assemblerService.getOrders()
            .subscribe( (data) => {
                this.orders = data;
                this.ordersSubscription = this.assemblerService.getOrdersSubscription()
                    .subscribe((msg ) => this.updateOrders(JSON.parse(msg.body)))
            });

    }

    updateOrders(msg : any) : void {
        if(msg.code == "MAKE"){
            this.orders?.push(msg.order);
        } else {
            this.orders = this.orders?.filter(el => {
                return el.id !== msg.order.id;
            });
        }
    }

    onTakeOrder(order: Order){
        this.assemblerService.takeOrder(order);
    }

    onLogoutClick() : void {
        this.router.navigate(['/logout']);
    }

    ngOnDestroy(): void {
        if(this.ordersSubscription){
            this.ordersSubscription.unsubscribe();
        }
    }


}
