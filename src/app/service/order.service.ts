import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Group } from '../model/Group';
import { Product } from '../model/Product';
import { Order } from '../model/Order';
import { OrderItem } from '../model/OrderItem';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private orderUrl = "api/customer/order";

    public currentOrder = new BehaviorSubject<Order>({id: 0, address : undefined, comment: " ",items: new Array<OrderItem>()});

    constructor(private http: HttpClient) { }

    addToOrder(product: Product): void {
        const items = this.currentOrder.value.items;

        const itemInOrder = items?.find((_item) => _item.product?.id === product.id);

        if(itemInOrder && itemInOrder.count){
            itemInOrder.count += 1;
        } else {
            items?.push(new OrderItem(product));
        }

        const currentValue = this.currentOrder.value;
        this.currentOrder.next({
            id: currentValue.id, 
            address: currentValue.address, 
            comment: currentValue.comment, 
            items: items
        });

        console.log("request to: " + this.orderUrl + "/" + this.currentOrder.value.id);
        this.http.put(this.orderUrl + "/current", this.currentOrder.value).subscribe((data) => console.log(data));
    }

    getCurrentOrder(): Observable<Order>{
        this.http.get<Order>(this.orderUrl + "/current").subscribe( (value) => this.currentOrder.next(value));
        return this.currentOrder;
    }

}

