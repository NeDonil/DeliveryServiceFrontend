import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/model/Order';
import { CourierService } from 'src/app/service/courier.service';
import {ORDER_STATUS} from "../../model/OrderStatus";

@Component({
  selector: 'app-courier',
  templateUrl: 'courier.component.html'
})
export class CourierComponent implements OnInit{
    currentOrder : Order | undefined;

    currentState: ORDER_STATUS = ORDER_STATUS.ASSEMBLED;
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

    protected readonly ORDER_STATUS = ORDER_STATUS;
}
