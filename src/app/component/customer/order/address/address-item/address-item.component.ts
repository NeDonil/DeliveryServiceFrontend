import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from 'src/app/model/Address';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.html'
})
export class AddressItemComponent {
    @Input() address !: Address;

    @Output() addressSelected = new EventEmitter();

    onAddressSelected() : void {
        this.addressSelected.emit(this.address);
    }
}
