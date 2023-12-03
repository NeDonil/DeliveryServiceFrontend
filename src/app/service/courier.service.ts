import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Order} from '../model/Order';
import {HttpClient} from '@angular/common/http';
import {WebsocketService} from "./websocket.service";
import {ORDER_ACTION} from "../model/OrderAction";
import {ORDER_STATUS} from "../model/OrderStatus";
import {OrderWithStatus} from "../model/OrderWithStatus";

@Injectable({
  providedIn: 'root'
})
export class CourierService {

    private currentState = new BehaviorSubject<ORDER_STATUS>(ORDER_STATUS.ASSEMBLED);
    private courierUrl : string = "/api/courier/";
    private currentOrder =  new BehaviorSubject<Order | undefined>(undefined);

    constructor(private http: HttpClient,
                private websocketService: WebsocketService) { }

    getOrders() : Observable<Order[]> {
        return this.http.get<Order[]>(this.courierUrl + "order");
    }

    getOrdersSubscription(): Observable<any>{
        return this.websocketService.watch("/order/assembled");
    }

    getCurrentOrder() : BehaviorSubject<Order | undefined>{
        this.http.get<OrderWithStatus>(this.courierUrl + "order/current")
            .subscribe( (orderCandid) => {
                if(orderCandid.status){
                    this.currentOrder.next(orderCandid.order);
                    this.currentState.next(orderCandid.status);
                }
            });

        return this.currentOrder;
    }
    getCurrentState() : BehaviorSubject<ORDER_STATUS>{
        return this.currentState;
    }

    takeOrder(order: Order) : void {
        this.websocketService.watch("/order/" + order.id)
            .subscribe(() => {
                this.currentOrder.next(order);
                this.currentState.next(ORDER_STATUS.DELIVERING);
            });
        this.websocketService.publish({destination: "/courier/order/" + order.id, body : ORDER_ACTION.TO_DELIVERY});
    }

    makeDelivered(order: Order): void {
        this.websocketService.watch("/order/" + order.id)
            .subscribe(() => {
                this.currentOrder.next(order);
                this.currentState.next(ORDER_STATUS.ASSEMBLED);
            });
        this.websocketService.publish({destination: "/courier/order/" + order.id, body : ORDER_ACTION.TO_DELIVERED});
    }
}
