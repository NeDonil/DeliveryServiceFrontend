import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../model/Order';
import { Product } from '../model/Product';
import {WebsocketService} from "./websocket.service";
import {OrderMessage} from "../message/OrderMessage";

@Injectable({
    providedIn: 'root'
})
export class AssemblerService {

    private currentState = new BehaviorSubject<number>(1);
    private assemblerUrl : string = "api/assembler/";
    private currentOrder =  new BehaviorSubject<Order | undefined>(undefined);

    constructor(private http: HttpClient, private websocketService : WebsocketService) { }

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

    takeOrder(order: Order) : Observable<Object> {
        return this.http.get(this.assemblerUrl + "order/" + order.id + "/action/TO_ASSEMBLY")
            .pipe( (data) => {
                this.currentOrder.next(order);
                this.currentState.next(2);
                return data;
            });
    }

    makeAssembled(order: Order): Observable<Object> {
        return this.http.get(this.assemblerUrl + "order/" + order.id + "/action/TO_ASSEMBLED")
            .pipe( (data) => {
                this.currentOrder.next(order);
                this.currentState.next(1);
                return data;
            });
    }
}
