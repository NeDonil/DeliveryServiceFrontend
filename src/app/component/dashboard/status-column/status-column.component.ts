import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ORDER_STATUS} from "../../../model/OrderStatus";
import {OrderWithEmployee} from "../../../model/OrderWithEmployee";
import {Subscription} from "rxjs";
import {AdminService} from "../../../service/admin.service";
import {ORDER_ACTION_MAPPER} from "../../../model/OrderAction";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-status-column',
  templateUrl: './status-column.component.html'
})
export class StatusColumnComponent implements OnInit, OnDestroy{
    @Input() title !: string;
    @Input() legend !: string;
    @Input() status !: ORDER_STATUS;

    orders !: OrderWithEmployee[];
    ordersSubscription !: Subscription;

    constructor(private adminService: AdminService) {
    }

    ngOnInit() : void {
        this.adminService.getOrdersByStatus(this.status)
            .subscribe( (data) => {
               this.orders = data;
               this.ordersSubscription = this.adminService.subscribeToOrders(this.status.toLowerCase())
                   .subscribe( (msg) => {
                      this.processMessage(JSON.parse(msg.body));
                   });
            });
    }

    processMessage(msg : any){
        console.log(this.status + " and " + ORDER_ACTION_MAPPER[msg.code]);
        if(this.status == ORDER_ACTION_MAPPER[msg.code]){
            this.orders.push({order: msg.order, employee : msg.employee});
        } else {
            this.orders = this.orders?.filter(el => {
                return el.order.id !== msg.order.id;
            });
        }
    }

    drop(event: CdkDragDrop<OrderWithEmployee[]>) {
        if (event.previousContainer !== event.container) {
            const orderId = event.previousContainer.data[event.previousIndex].order.id;
            if(orderId) {
                this.adminService.updateOrderStatus(orderId, this.status);
            }
        }
    }

    ngOnDestroy() : void {
        if(this.ordersSubscription){
            this.ordersSubscription.unsubscribe();
        }
    }
}
