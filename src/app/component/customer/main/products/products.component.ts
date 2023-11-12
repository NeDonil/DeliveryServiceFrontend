import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

export interface ProductCard{
    id: number;
    url: string;
    title: string;
    price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

    constructor(private productService: ProductService){}

    productCards : ProductCard[] = [];
    currentGroupId : number = 0;

    async ngOnInit(){
        let firstId = -1;
        await this.productService.getAllGroupsP().then((data) => {
            if(data != null){
                this.getProducts(data[0].id);
            }
        });
    }

    getProducts(id: number){
        this.productService.getProductsInGroup(id).subscribe( data => {
            data.forEach((el) =>{
                this.productCards.push({id: el.id, url: el.photo, title: el.title, price: el.price / 100});
            }
        )});
    }
  
}
