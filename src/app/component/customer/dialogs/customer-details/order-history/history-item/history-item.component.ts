import {Component, Input} from '@angular/core';
import {Order} from "../../../../../../model/Order";
import {ORDER_STATUS_MAPPER} from "../../../../../../model/OrderStatus";

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html'
})

export class HistoryItemComponent {
    @Input() order !: Order;

    calcTotalPrice(): number {
        let sum = 0;
        if(this.order && this.order.items){ //Todo: use reduce
            this.order.items.forEach( (e) => {
                if(e.product && e.count && e.product.price) sum += e.product.price * e.count;
            });
        }
        return sum;
    }

    protected readonly ORDER_STATUS_MAPPER = ORDER_STATUS_MAPPER;
}
