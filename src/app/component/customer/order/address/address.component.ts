import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/model/Address';
import { AddressService } from 'src/app/service/address.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit, OnDestroy{

    addresses = new Array<Address>();
    currentAddress : Address | undefined;
    addressesSubscription : Subscription | undefined;

    constructor(private addressService: AddressService,
                private orderService: OrderService){}

    ngOnInit() : void {
        this.addressesSubscription = this.addressService.getAllAddresses()
            .subscribe( (data) => this.addresses = data);
        
        this.orderService.currentOrder.subscribe( (data) => this.currentAddress = data.address)
    }

    onAddressSelected(address: Address) : void {
        this.currentAddress = address;
        this.orderService.setAddress(address);
    }

    ngOnDestroy(): void {
        if(this.addressesSubscription){
            this.addressesSubscription.unsubscribe();
        }
    }


}
