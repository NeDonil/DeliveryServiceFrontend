import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/model/Order';
import { CourierService } from 'src/app/service/courier.service';

@Component({
  selector: 'app-courier',
  templateUrl: 'courier.component.html' 
})
export class CourierComponent {
    currentOrder : Order | undefined;
    currentOrderSubscription = new Subscription;

    currentState: number = 3;
    currentStateSubscription = new Subscription;

    constructor(private courierService: CourierService){}

    ngOnInit() : void {
        this.currentOrderSubscription = this.courierService
            .getCurrentOrder()
            .subscribe( (data) => this.currentOrder = data);
        
        this.currentStateSubscription = this.courierService
            .getCurrentState()
            .subscribe( (data) => this.currentState = data);
    }

    ngOnDestroy(): void {
        if(this.currentOrderSubscription){
            this.currentOrderSubscription.unsubscribe();
        }

        if(this.currentState){
            this.currentStateSubscription.unsubscribe();
        }
    }
}
