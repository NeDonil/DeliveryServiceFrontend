import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {Order} from '../model/Order';
import {WebsocketService} from "./websocket.service";
import {ORDER_ACTION_REQUEST, ORDER_ACTION_RESPONSE} from "../model/OrderAction";
import {OrderWithStatus} from "../model/OrderWithStatus";
import {ORDER_STATUS} from "../model/OrderStatus";
import {OrderMessage} from "../message/OrderMessage";

@Injectable({
    providedIn: 'root'
})
export class AssemblerService {

    private currentState = new BehaviorSubject<ORDER_STATUS>(ORDER_STATUS.PLACED);
    private assemblerUrl : string = "/api/assembler/";
    private currentOrder =  new BehaviorSubject<Order | undefined>(undefined);
    private currentOrderSubscription !: Subscription;

    constructor(private http: HttpClient,
                private websocketService : WebsocketService) { }

    getOrders() : Observable<Order[]> {
        return this.http.get<Order[]>(this.assemblerUrl + "order");
    }

    getOrdersSubscription(): Observable<any>{
        return this.websocketService.watch("/order/placed");
    }

    getCurrentOrder() : BehaviorSubject<Order | undefined>{
        this.http.get<OrderWithStatus>(this.assemblerUrl + "order/current")
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

    setCurrentState(state : ORDER_STATUS) : void {
        this.currentState.next(state);
    }

    takeOrder(order : Order) : void {
        this.currentOrderSubscription = this.websocketService.watch("/order/" + order.id)
            .subscribe((msg) => {
                this.currentOrder.next(order);
                this.currentState.next(ORDER_STATUS.ASSEMBLING);
                this.processMessage(JSON.parse(msg.body));
            });
        this.websocketService.publish({destination: "/assembler/order/" + order.id, body : ORDER_ACTION_REQUEST.TO_ASSEMBLY});
    }

    rejectOrder(id: number) : void {
        this.websocketService.publish({destination: "/assembler/order/" + id, body : ORDER_ACTION_REQUEST.ASSEMBLER_REFUSE});
        setTimeout(() => {
            this.currentState.next(ORDER_STATUS.PLACED);
            this.currentOrder.next(undefined);
            if(this.currentOrderSubscription){
                this.currentOrderSubscription.unsubscribe();
            }
        }, 400);
    }

    makeAssembled(order: Order): void {
        this.websocketService.watch("/order/" + order.id)
            .subscribe(() => {
                this.currentOrder.next(order);
                this.currentState.next(ORDER_STATUS.PLACED);
            });
        this.websocketService.publish({destination: "/assembler/order/" + order.id, body : ORDER_ACTION_REQUEST.TO_ASSEMBLED});
        if(this.currentOrderSubscription){
            this.currentOrderSubscription.unsubscribe();
        }
    }
}
