import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebsocketService} from "./websocket.service";
import {BehaviorSubject, Observable} from "rxjs";
import {OrderWithEmployee} from "../model/OrderWithEmployee";
import {IMessage} from "@stomp/rx-stomp";
import {ADMIN_STATE} from "../component/admin/admin.state";
import {EmployeeCreate} from "../model/EmployeeCreate";
import {ORDER_STATUS, ORDER_STATUS_REQUEST, ORDER_STATUS_REQUEST_MAPPER} from "../model/OrderStatus";

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

    updateOrderStatus(orderId: number, status: ORDER_STATUS){
        this.websocketService.publish({
            destination: "/admin/order/" + orderId,
            body : ORDER_STATUS_REQUEST_MAPPER[status].toString()
        });
    }
    getCurrentState() : BehaviorSubject<ADMIN_STATE> {
        return this.currentState;
    }
    subscribeToOrders(status: string): Observable<IMessage> {
        return this.websocketService.watch("/order/" + status);
    }

    createAssembler(employee: EmployeeCreate) : Observable<any> {
        return this.http.post<any>(this.adminUrl + "/assembler", employee);
    }

    createCourier(employee: EmployeeCreate) : Observable<any> {
        return this.http.post<any>(this.adminUrl + "/courier", employee);
    }

}
