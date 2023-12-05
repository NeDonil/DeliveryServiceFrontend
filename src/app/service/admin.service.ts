import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebsocketService} from "./websocket.service";
import {BehaviorSubject, Observable} from "rxjs";
import {OrderWithEmployee} from "../model/OrderWithEmployee";
import {IMessage} from "@stomp/rx-stomp";
import {ADMIN_STATE} from "../component/admin/admin.state";

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    private currentState = new BehaviorSubject<ADMIN_STATE>(ADMIN_STATE.MAIN);
    adminUrl = "/api/admin/"
    constructor(private http: HttpClient,
              private websocketService: WebsocketService) { }

    getOrdersByStatus(status : string) : Observable<OrderWithEmployee[]> {
        return this.http.get<OrderWithEmployee[]>(this.adminUrl + "order/" + status);
    }

    setCurrentState(state: ADMIN_STATE) : void {
        this.currentState.next(state);
    }
    getCurrentState() : BehaviorSubject<ADMIN_STATE> {
        return this.currentState;
    }

    subscribeToOrders(status: string): Observable<IMessage> {
        return this.websocketService.watch("/order/" + status);
    }

}
