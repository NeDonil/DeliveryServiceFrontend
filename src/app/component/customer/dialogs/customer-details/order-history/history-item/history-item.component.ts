import {Component, Input} from '@angular/core';
import {Order} from "../../../../../../model/Order";
import {ORDER_STATUS, ORDER_STATUS_MAPPER} from "../../../../../../model/OrderStatus";
import {min} from "rxjs";
import {OrderService} from "../../../../../../service/order.service";

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html'
})

export class HistoryItemComponent {
    @Input() order !: Order;

    constructor(private orderService: OrderService) {}

    calcTotalPrice(): number {
        let sum = 0;
        if(this.order && this.order.items){ //Todo: use reduce
            this.order.items.forEach( (e) => {
                if(e.product && e.count && e.product.price) sum += e.product.price * e.count;
            });
        }
        return sum;
    }

    getPrettyStatus(status: string | undefined) : string {
        let prettyStatus = '';
        if(status) {
             prettyStatus = ORDER_STATUS_MAPPER[status];
        }
        if(status == ORDER_STATUS.DELIVERED && this.order.endDate && this.order.beginDate){
            const minutes = Math.floor((
                new Date(this.order.endDate).getTime() -
                new Date(this.order.beginDate).getTime()
            ) / (1000 * 60));

            let form = ''
            if( (minutes % 10) == 1) form = ' минуту';
            else if( (minutes % 10) > 1 && (minutes % 10) < 5) form = ' минуту';
            else form = ' минут';

            prettyStatus += ' за ' + minutes + form;
        }

        return prettyStatus;
    }

    rejectOrder() : void {
        if(this.order.id) {
            this.orderService.rejectOrder(this.order.id);
        }
    }

    protected readonly ORDER_STATUS_MAPPER = ORDER_STATUS_MAPPER;
    protected readonly ORDER_STATUS = ORDER_STATUS;
}
