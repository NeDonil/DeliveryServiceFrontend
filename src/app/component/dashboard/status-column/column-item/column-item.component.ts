import {Component, Input} from '@angular/core';
import {OrderWithEmployee} from "../../../../model/OrderWithEmployee";

@Component({
  selector: 'app-column-item',
  templateUrl: 'column-item.component.html'
})
export class ColumnItemComponent {
    @Input() order !: OrderWithEmployee;
}
