import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../model/Order';
import {WebsocketService} from "./websocket.service";
import {ORDER_ACTION} from "../model/OrderAction";

@Injectable({
    providedIn: 'root'
})
export class AssemblerService {

    private currentState = new BehaviorSubject<number>(1);
    private assemblerUrl : string = "/api/assembler/";
    private currentOrder =  new BehaviorSubject<Order | undefined>(undefined);

    constructor(private http: HttpClient,
                private websocketService : WebsocketService) { }

    getOrders() : Observable<Order[]> {
        return this.http.get<Order[]>(this.assemblerUrl + "order");
    }

    getOrdersSubscription(): Observable<any>{
        return this.websocketService.watch("/order/placed");
    }

    getCurrentOrder() : BehaviorSubject<Order | undefined>{
        return this.currentOrder;
    }

    getCurrentState() : BehaviorSubject<number>{
        return this.currentState;
    }

    takeOrder(order : Order) : void {
        this.websocketService.watch("/order/" + order.id)
            .subscribe(() => {
                this.currentOrder.next(order);
                this.currentState.next(2);
            });
        this.websocketService.publish({destination: "/assembler/order/" + order.id, body : ORDER_ACTION.TO_ASSEMBLY});
    }

    makeAssembled(order: Order): void {
        this.websocketService.watch("/order/" + order.id)
            .subscribe(() => {
                this.currentOrder.next(order);
                this.currentState.next(1);
            });
        this.websocketService.publish({destination: "/assembler/order/" + order.id, body : ORDER_ACTION.TO_ASSEMBLED});
    }
}
