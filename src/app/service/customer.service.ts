import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../model/Group';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    private productUrl = "api/product";
    private customerUrl = "api/product";

    constructor(private http: HttpClient) { }

    getAllGroups(): Observable<Group[]>{
        return this.http.get<Group[]>(this.productUrl + "/group")
    }
  
}
