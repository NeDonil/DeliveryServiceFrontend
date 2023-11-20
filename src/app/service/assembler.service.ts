import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/Order';

@Injectable({
    providedIn: 'root'
})
export class AssemblerService {

    private assemblerUrl : string = "api/assembler/";

    constructor(private http: HttpClient) { }

    getOrders() : Observable<Order[]> {
        return this.http.get<Order[]>(this.assemblerUrl + "order");
    }

    takeOrder(order: Order) : Observable<Object> {
        return this.http.get(this.assemblerUrl + "order/" + order.id + "/action/TO_ASSEMBLY");
    }

    makeAssembled(order: Order): Observable<Object> {
        return this.http.get(this.assemblerUrl + "order/" + order.id + "/action/TO_ASSEMBLED");
    }
}
