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

    customer = new BehaviorSubject<Customer>({id: -1, fio: "", email: "", addresses : []});
    constructor(private http: HttpClient) {
        this.getCustomerDetails();
    }
    getCustomerDetails() : void {
        this.http.get<Customer>(this.customerUrl)
            .subscribe( (data) => {
                this.customer.next(data);
            })
    }

    createAddress(address: string) : void {
        this.http.post(this.customerUrl + "/address", address)
            .subscribe( (data) => {
                this.getCustomerDetails();
            })
    }
}
