import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../model/Group';
import { Product } from '../model/Product';
import { Order } from '../model/Order';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private productUrl = "api/customer/order";

    constructor(private http: HttpClient) { }

    getCurrentOrder(): Observable<Order>{
        return this.http.get<Order>(this.productUrl + "/current");
    }

}

