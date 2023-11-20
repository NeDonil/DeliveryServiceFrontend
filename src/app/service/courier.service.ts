import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../model/Order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourierService {

    private currentState = new BehaviorSubject<number>(1);
    private courierUrl : string = "api/courier/";
    private currentOrder =  new BehaviorSubject<Order | undefined>(undefined); 

    constructor(private http: HttpClient) { }

    getOrders() : Observable<Order[]> {
        return this.http.get<Order[]>(this.courierUrl + "order");
    }

    getCurrentOrder() : BehaviorSubject<Order | undefined>{
        return this.currentOrder;
    }

    getCurrentState() : BehaviorSubject<number>{
        return this.currentState;
    }

    takeOrder(order: Order) : Observable<Object> {
        return this.http.get(this.courierUrl + "order/" + order.id + "/action/TO_DELIVERY")
            .pipe( (data) => {
                this.currentOrder.next(order); 
                this.currentState.next(3);
                return data; 
            });
    }

    makeDelivered(order: Order): Observable<Object> {
        return this.http.get(this.courierUrl + "order/" + order.id + "/action/TO_DELIVERED")
            .pipe( (data) => {
                this.currentOrder.next(order); 
                this.currentState.next(2);
                return data; 
            });
    }
}
