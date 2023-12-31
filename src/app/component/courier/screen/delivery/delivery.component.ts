import { Component, Input } from '@angular/core';
import { Order } from 'src/app/model/Order';
import { CourierService } from 'src/app/service/courier.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html'
})
export class DeliveryComponent {
    @Input() order !: Order | undefined;

    constructor(private courierService: CourierService){}

    onOrderDeliveredPress() : void {
        if(this.order){
            this.courierService.makeDelivered(this.order);
        }
    }

    rejectOrder() : void {
        if(this.order?.id) {
            this.courierService.rejectOrder(this.order.id)
        }
    }
}
