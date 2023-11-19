import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../model/Address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

    private productUrl = "api/customer/address";

    constructor(private http: HttpClient) { }

    getAllAddresses(): Observable<Address[]>{
        return this.http.get<Address[]>(this.productUrl);
    }
}
