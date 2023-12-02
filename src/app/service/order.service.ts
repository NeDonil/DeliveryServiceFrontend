import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Observer} from 'rxjs';
import { Group } from '../model/Group';
import { Product } from '../model/Product';
import { Order } from '../model/Order';
import { OrderItem } from '../model/OrderItem';
import { Address } from '../model/Address';
import {WebsocketService} from "./websocket.service";
import {ORDER_ACTION} from "../model/OrderAction";
import {IMessage} from "@stomp/rx-stomp";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private orderUrl = "/api/customer/order";

    public currentOrder = new BehaviorSubject<Order>({
        id: 0, address : new Address(), comment: "",
        beginDate: new Date(), endDate: new Date(),
        status: '', items: new Array<OrderItem>()});

    public orderHistory = new BehaviorSubject<Order[]>([]);

    constructor(private http: HttpClient,
                private websocketService: WebsocketService) { }

    addToOrder(product: Product): void {
        const items = this.currentOrder.value.items;
        const itemInOrder = items?.find((_item) => _item.product?.id === product.id);

        if(itemInOrder && itemInOrder.count){
            itemInOrder.count += 1;
        } else {
            items?.push(new OrderItem(product));
        }

        this.updateOrder(items);
    }

    removeOneFromOrder(product: Product): void {

        const items = this.currentOrder.value.items;
        if(!items){
            return;
        }

        const itemInOrder = items.find((_item) => _item.product?.id === product.id);

        if(itemInOrder?.count && itemInOrder?.count > 1){
            itemInOrder.count -= 1;
        } else if(itemInOrder){
            const itemIndex = items?.indexOf(itemInOrder, 0);
            items.splice(itemIndex, 1);
        }

        this.updateOrder(items);
    }

    removeFromOrder(product: Product): void {

        const items = this.currentOrder.value.items;
        if(!items){
            return;
        }

        const itemInOrder = items.find((_item) => _item.product?.id === product.id);

        if(itemInOrder){
            const itemIndex = items?.indexOf(itemInOrder, 0);
            items.splice(itemIndex, 1);
        }

        this.updateOrder(items);
    }

    updateOrder(items: Array<OrderItem> | undefined): void {
        const currentValue = this.currentOrder.value;

        if(items){
            this.currentOrder.next({
                id: currentValue.id,
                address: currentValue.address,
                comment: currentValue.comment,
                beginDate: currentValue.beginDate,
                endDate: currentValue.endDate,
                status: currentValue.status,
                items: items
            });
            this.http.put(this.orderUrl + "/current", this.currentOrder.value)
                .subscribe((data) => console.log(data));
        }
    }

    setAddress(address: Address) : void {
        let currentOrderValue = this.currentOrder.value;
        currentOrderValue.address = address;
        this.currentOrder.next(currentOrderValue);
        this.http.put(this.orderUrl + "/current", this.currentOrder.value)
            .subscribe((data) => console.log(data));
    }

    setComment(comment: string) : void {
        let currentOrderValue = this.currentOrder.value;
        currentOrderValue.comment = comment;
        this.http.put<Order>(this.orderUrl + "/current", this.currentOrder.value)
            .subscribe((data) => {
                console.log(data);
                this.currentOrder.next(data);
            });
    }

    makeOrder(id: number){
        this.websocketService.watch("/order/" + id).subscribe(() => {
            this.getCurrentOrder()
                .subscribe((data) => console.log("Now current order is " + data.id));
        });
        this.websocketService.publish({destination : "/customer/order/" + id, body: ORDER_ACTION.MAKE});
    }

    rejectOrder(id: number){
        this.websocketService.watch("/order/" + id).subscribe(() => {
            this.getCurrentOrder()
                .subscribe((data) => console.log("Reject from order " + data.id));
        });
        this.websocketService.publish({destination : "/customer/order/" + id, body: ORDER_ACTION.REFUSE});
    }

    getCurrentOrder(): Observable<Order>{
        this.http.get<Order>(this.orderUrl + "/current").subscribe( (value) => this.currentOrder.next(value));
        return this.currentOrder;
    }

    getOrderHistory(): Observable<Order[]>{
        this.http.get<Order[]>(this.orderUrl)
            .subscribe( (data) => {
                this.orderHistory.next(data)
            });
        return this.orderHistory;
    }

    getOrderSubscription(id: number) {
        return this.websocketService.watch("/order/" + id);
    }
}

