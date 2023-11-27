import {Component, Inject, OnInit} from '@angular/core';
import {Dialog, DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";
import {Router} from "@angular/router";
import {CustomerDetailsService} from "../../../../service/customer-details.service";
import {Address} from "../../../../model/Address";
import {OrderService} from "../../../../service/order.service";
import {AddressCreateComponent} from "./address-create/address-create.component";

@Component({
  selector: 'app-address-dialog',
  templateUrl: 'address-dialog.component.html'
})
export class AddressDialogComponent implements OnInit{

    addresses !: Address[];
    currentAddress : Address | undefined;
    constructor(private dialogRef: DialogRef,
                private createAddress: Dialog,
                private customerDetailsService: CustomerDetailsService,
                private orderService: OrderService,
                @Inject(DIALOG_DATA) public data: any) {}

    ngOnInit() : void {
        this.customerDetailsService.customer
            .subscribe( (data) => this.addresses = data.addresses);
        this.orderService.currentOrder
            .subscribe( (data) => this.currentAddress = data.address);
    }

    onAddressCreate() : void {
        this.createAddress.open<string>(AddressCreateComponent);
    }

}
