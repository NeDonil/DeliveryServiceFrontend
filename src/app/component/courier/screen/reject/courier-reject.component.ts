import {Component} from '@angular/core';
import {ORDER_STATUS} from "../../../../model/OrderStatus";
import {CourierService} from "../../../../service/courier.service";

@Component({
    selector: 'app-courier-reject',
    templateUrl: './courier-reject.component.html'
})
export class CourierRejectComponent {

    constructor(private courierService : CourierService) {}
    onEscapeClicked() : void {
        this.courierService.setCurrentState(ORDER_STATUS.ASSEMBLED);
    }
}

