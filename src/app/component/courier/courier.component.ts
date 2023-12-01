import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/model/Order';
import { CourierService } from 'src/app/service/courier.service';

@Component({
  selector: 'app-courier',
  templateUrl: 'courier.component.html'
})
export class CourierComponent implements OnInit{
    currentOrder : Order | undefined;

    currentState: number = 3;
    currentStateSubscription = new Subscription;

    constructor(private courierService: CourierService){}

    ngOnInit() : void {
        this.courierService
            .getCurrentOrder()
            .subscribe( (data) => this.currentOrder = data);

        this.currentStateSubscription = this.courierService
            .getCurrentState()
            .subscribe( (data) => this.currentState = data);
    }
}
