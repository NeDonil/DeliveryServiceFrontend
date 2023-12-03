import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {Order} from '../model/Order';
import {HttpClient} from '@angular/common/http';
import {WebsocketService} from "./websocket.service";
import {ORDER_ACTION_REQUEST, ORDER_ACTION_RESPONSE} from "../model/OrderAction";
import {ORDER_STATUS} from "../model/OrderStatus";
import {OrderWithStatus} from "../model/OrderWithStatus";
import {OrderMessage} from "../message/OrderMessage";

@Injectable({
  providedIn: 'root'
})
export class CourierService {

    private currentState = new BehaviorSubject<ORDER_STATUS>(ORDER_STATUS.ASSEMBLED);
    private courierUrl : string = "/api/courier/";
    private currentOrder =  new BehaviorSubject<Order | undefined>(undefined);
    private currentOrderSubscription !: Subscription;

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
                    this.currentOrderSubscription = this.websocketService.watch("/order/" + orderCandid.order.id)
                        .subscribe( (msg) => this.processMessage(JSON.parse(msg.body)))
                }

            });

        return this.currentOrder;
    }

    processMessage(orderMessage: OrderMessage) : void {
        if(orderMessage.code == ORDER_ACTION_RESPONSE.REJECT){
            this.currentOrder.next(undefined);
            this.currentState.next(ORDER_STATUS.REJECTED);
            this.currentOrderSubscription.unsubscribe();
        }
    }
    getCurrentState() : BehaviorSubject<ORDER_STATUS>{
        return this.currentState;
    }

    setCurrentState(state: ORDER_STATUS) : void {
        this.currentState.next(state);
    }

    takeOrder(order: Order) : void {
        this.currentOrderSubscription = this.websocketService.watch("/order/" + order.id)
            .subscribe((msg) => {
                this.currentOrder.next(order);
                this.currentState.next(ORDER_STATUS.DELIVERING);
                this.processMessage(JSON.parse(msg.body));
            });
        this.websocketService.publish({destination: "/courier/order/" + order.id, body : ORDER_ACTION_REQUEST.TO_DELIVERY});
    }

    rejectOrder(id: number) : void {
        this.websocketService.publish({destination: "/courier/order/" + id, body : ORDER_ACTION_REQUEST.COURIER_REFUSE});
        setTimeout(() => {
            this.currentState.next(ORDER_STATUS.ASSEMBLED);
            this.currentOrder.next(undefined);
            if(this.currentOrderSubscription){
                this.currentOrderSubscription.unsubscribe();
            }
        }, 400);
    }

    makeDelivered(order: Order): void {
        this.websocketService.watch("/order/" + order.id)
            .subscribe(() => {
                this.currentOrder.next(order);
                this.currentState.next(ORDER_STATUS.ASSEMBLED);
            });
        this.websocketService.publish({destination: "/courier/order/" + order.id, body : ORDER_ACTION_REQUEST.TO_DELIVERED});
        if(this.currentOrderSubscription){
            this.currentOrderSubscription.unsubscribe();
        }
    }
}
