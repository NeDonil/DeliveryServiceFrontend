import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit, OnDestroy{
    constructor(private productService: ProductService,
                private orderService: OrderService){}

    products : Array<Product> | undefined;
    productSubscription : Subscription | undefined;

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

    ngOnDestroy(): void {
        if(this.productSubscription){
            this.productSubscription.unsubscribe();
        }
    }
}
