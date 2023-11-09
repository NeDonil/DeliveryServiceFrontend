import { Component, Input } from '@angular/core';

export interface ProductCard{
    url: string;
    title: string;
    price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
    products: ProductCard[]= [
        {
            url: "https://cm.samokat.ru/processed/m/public/9676203a013c263d_4670117690775-1.jpg",
            title: "Product one",
            price: 100
        },
        {
            url: "https://cm.samokat.ru/processed/m/public/9676203a013c263d_4670117690775-1.jpg",
            title: "Product two",
            price: 200
        },
        {
            url: "https://cm.samokat.ru/processed/m/public/9676203a013c263d_4670117690775-1.jpg",
            title: "Product three",
            price: 300
        },
        {
            url: "https://cm.samokat.ru/processed/m/public/9676203a013c263d_4670117690775-1.jpg",
            title: "Product four",
            price: 400
        },
        {
            url: "https://cm.samokat.ru/processed/m/public/9676203a013c263d_4670117690775-1.jpg",
            title: "Product five",
            price: 500
        },
        {
            url: "https://cm.samokat.ru/processed/m/public/9676203a013c263d_4670117690775-1.jpg",
            title: "Product six",
            price: 600
        },
        {
            url: "https://cm.samokat.ru/processed/m/public/9676203a013c263d_4670117690775-1.jpg",
            title: "Product seven",
            price: 700
        },
        {
            url: "https://cm.samokat.ru/processed/m/public/9676203a013c263d_4670117690775-1.jpg",
            title: "Product eight",
            price: 800
        },

    ]
}
