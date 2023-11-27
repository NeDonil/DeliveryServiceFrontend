import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../model/Address';
import {BehaviorSubject, Observable} from 'rxjs';
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {
    private customerUrl = "api/customer";

    addresses = new BehaviorSubject<Address[]>([]);
    fio= new BehaviorSubject<string>("");
    constructor(private http: HttpClient) {
        this.getCustomerDetails();
    }
    getCustomerDetails() : void {
        this.http.get<Customer>(this.customerUrl)
            .subscribe( (data) => {
                this.addresses.next(data.addresses);
                this.fio.next(data.fio);
            })
    }
}
