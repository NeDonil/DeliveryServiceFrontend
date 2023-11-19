import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Group } from '../model/Group';
import { Product } from '../model/Product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = "api/product";

    currentGroup = new BehaviorSubject<Product[]>([]);

    constructor(private http: HttpClient) { }

    getAllGroups(): Observable<Group[]>{
        return this.http.get<Group[]>(this.productUrl + "/group");
    }


    getProductsInGroup(groupId: number): Observable<Product[]>{
        this.http.get<Product[]>(this.productUrl + "/group/" + groupId).subscribe(data => this.currentGroup.next(data));
        return this.currentGroup;
    }
}
