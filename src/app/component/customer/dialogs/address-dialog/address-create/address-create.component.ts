import { Component } from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {CustomerDetailsService} from "../../../../../service/customer-details.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-address-create',
  templateUrl: 'address-create.component.html'
})
export class AddressCreateComponent {

    street = new FormControl('');
    house = new FormControl('');
    enter = new FormControl('');
    floor = new FormControl('');
    apartment = new FormControl('');
    constructor(private dialogRef: DialogRef,
                private customerDetailsService: CustomerDetailsService) {
    }

    onCreate() : void {
        const address = "ул. " + this.street.value + " " +
            "д. " + this.house.value + " " +
            "п. " + this.enter.value + " " +
            "э. " + this.floor.value + " " +
            "кв. " + this.apartment.value;
        this.customerDetailsService.createAddress(address);
        this.dialogRef.close();
    }

    onCancel() : void {
        this.dialogRef.close();
    }
}
