import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../../../service/order.service";
import {Order} from "../../../../../model/Order";
import {ORDER_STATUS, ORDER_STATUS_MAPPER} from "../../../../../model/OrderStatus";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html'
})

export class OrderHistoryComponent implements OnInit {

    orders !: Order[];
    constructor(private orderService: OrderService) {
    }
    ngOnInit() : void {
        this.orderService.getOrderHistory()
            .subscribe( (data) => {
                this.orders = data; console.log(data);
            });
    }
}
