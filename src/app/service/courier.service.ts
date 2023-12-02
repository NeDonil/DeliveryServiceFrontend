import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../model/Order';
import { HttpClient } from '@angular/common/http';
import {WebsocketService} from "./websocket.service";
import {ORDER_ACTION} from "../model/OrderAction";

@Injectable({
  providedIn: 'root'
})
export class CourierService {

    private currentState = new BehaviorSubject<number>(3);
    private courierUrl : string = "/api/courier/";
    private currentOrder =  new BehaviorSubject<Order | undefined>(undefined);

    constructor(private http: HttpClient,
                private websocketService: WebsocketService) { }

    getOrders() : Observable<Order[]> {
        return this.http.get<Order[]>(this.courierUrl + "order");
    }

    getCurrentOrder() : BehaviorSubject<Order | undefined>{
        return this.currentOrder;
    }

    getOrdersSubscription(): Observable<any>{
        return this.websocketService.watch("/order/assembled");
    }

    getCurrentState() : BehaviorSubject<number>{
        return this.currentState;
    }

    takeOrder(order: Order) : void {
        this.websocketService.watch("/order/" + order.id)
            .subscribe((msg) => {
                this.currentOrder.next(order);
                this.currentState.next(4);
            });
        this.websocketService.publish({destination: "/courier/order/" + order.id, body : ORDER_ACTION.TO_DELIVERY});
    }

    makeDelivered(order: Order): void {
        this.websocketService.watch("/order/" + order.id)
            .subscribe((msg) => {
                this.currentOrder.next(order);
                this.currentState.next(3);
            });
        this.websocketService.publish({destination: "/courier/order/" + order.id, body : ORDER_ACTION.TO_DELIVERED});
    }
}
