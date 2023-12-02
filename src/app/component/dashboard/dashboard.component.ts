import { Component } from '@angular/core';
import {ORDER_STATUS} from "../../model/OrderStatus";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

    protected readonly ORDER_STATUS = ORDER_STATUS;
}
