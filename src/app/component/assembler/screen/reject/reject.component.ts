import {Component} from '@angular/core';
import {AssemblerService} from "../../../../service/assembler.service";
import {ORDER_STATUS} from "../../../../model/OrderStatus";

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html'
})
export class RejectComponent {

    constructor(private assemblerService : AssemblerService) {}
    onEscapeClicked() : void {
        this.assemblerService.setCurrentState(ORDER_STATUS.PLACED);
    }
}
