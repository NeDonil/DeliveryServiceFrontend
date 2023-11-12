import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../model/Group';
import { Product } from '../model/Product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = "api/product";

    constructor(private http: HttpClient) { }

    getAllGroups(): Observable<Group[]>{
        return this.http.get<Group[]>(this.productUrl + "/group");
    }

    getAllGroupsP(){
        return this.http.get<Group[]>(this.productUrl + "/group").toPromise();
    }

    getProductsInGroup(groupId: number): Observable<Product[]>{
        return this.http.get<Product[]>(this.productUrl + "/group/" + groupId);
    }
  
}
