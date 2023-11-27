import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/model/Address';
import { CustomerDetailsService } from 'src/app/service/customer-details.service';
import { OrderService } from 'src/app/service/order.service';
import {AddressDialogComponent} from "../../dialogs/address-dialog/address-dialog.component";
import {Dialog} from "@angular/cdk/dialog";
import {CustomerDetailsComponent} from "../../dialogs/customer-details/customer-details.component";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit{

    addresses = new Array<Address>();
    currentAddress : Address | undefined;

    constructor(private customerDetailsService: CustomerDetailsService,
                private orderService: OrderService,
                private dialog: Dialog){}

    ngOnInit() : void {
        this.customerDetailsService.customer
            .subscribe( (data) => this.addresses = data.addresses);

        this.orderService.currentOrder
            .subscribe( (data) => this.currentAddress = data.address)
    }

    openDialog() : void {
        this.dialog.open<string>(AddressDialogComponent,
            {data : {
                    addresses: this.addresses,
                    currentAddressId : this.currentAddress?.id
                },
            }
        )
    }

    onAddressSelected(address: Address) : void {
        this.currentAddress = address;
        this.orderService.setAddress(address);
    }

}
