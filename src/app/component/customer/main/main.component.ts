import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit{
    products : Array<Product> | undefined;
    productSubscription : Subscription | undefined;
    searchForm = new FormControl('');
    constructor(private productService: ProductService,
                private orderService: OrderService){}

    ngOnInit() : void {
        this.getProducts();
    }

    getProducts() :void{
        this.productSubscription = this.productService
            .getProductsInGroup(1)
            .subscribe((_products) => {
                this.products = _products;
            })
    }

    onAddToOrder(product: Product){
        this.orderService.addToOrder(product);
    }

    onSearchPressed() : void {
        const searchCandid = this.searchForm.value;
        if(searchCandid) {
            this.productService.findProducts(searchCandid)
                .subscribe((data) => this.products = data);
        }
    }
}
