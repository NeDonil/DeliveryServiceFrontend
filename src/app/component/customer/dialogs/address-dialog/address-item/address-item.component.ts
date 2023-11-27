import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from 'src/app/model/Address';
import {OrderService} from "../../../../../service/order.service";
import {DialogRef} from "@angular/cdk/dialog";
import {AddressDialogComponent} from "../address-dialog.component";

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html'
})
export class AddressItemComponent {
    @Input() address !: Address;
    @Input() selected !: boolean;

    constructor(private orderService: OrderService,
                private parrentDialogRef: DialogRef<AddressDialogComponent>) {
    }

    onAddressSelected() : void {
        if(this.address) {
            this.orderService.setAddress(this.address);
            this.parrentDialogRef.close();
        }
    }
}
