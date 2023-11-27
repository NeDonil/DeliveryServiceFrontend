import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../../../service/order.service";
import {Order} from "../../../../../model/Order";

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
                this.orders = data;
                this.orders.sort((a, b) => {
                    if(a.beginDate && b.beginDate) {
                        return new Date(b.beginDate).getTime() - new Date(a.beginDate).getTime();
                    }
                    return -1;
                });
            });
    }
}
