import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/model/Address';
import { CustomerDetailsService } from 'src/app/service/customer-details.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit{

    addresses = new Array<Address>();
    currentAddress : Address | undefined;

    constructor(private customerDetailsService: CustomerDetailsService,
                private orderService: OrderService){}

    ngOnInit() : void {
        this.customerDetailsService.customer
            .subscribe( (data) => this.addresses = data.addresses);

        this.orderService.currentOrder
            .subscribe( (data) => this.currentAddress = data.address)
    }

    onAddressSelected(address: Address) : void {
        this.currentAddress = address;
        this.orderService.setAddress(address);
    }

}
