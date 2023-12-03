import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebsocketService} from "./websocket.service";
import {Observable} from "rxjs";
import {OrderWithEmployee} from "../model/OrderWithEmployee";
import {ORDER_STATUS} from "../model/OrderStatus";
import {IMessage} from "@stomp/rx-stomp";

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    adminUrl = "/api/admin/"
    constructor(private http: HttpClient,
              private websocketService: WebsocketService) { }

    getOrdersByStatus(status : string) : Observable<OrderWithEmployee[]> {
        return this.http.get<OrderWithEmployee[]>(this.adminUrl + "order/" + status);
    }

    subscribeToOrders(status: string): Observable<IMessage> {
        return this.websocketService.watch("/order/" + status);
    }

}
