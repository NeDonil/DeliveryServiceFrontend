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
            url: "https://cm.samokat.ru/processed/m/original/95fd4465-27a6-11ed-885a-08c0eb32014b_1636298318.jpg",
            title: "Product two",
            price: 200
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/948a127d-9f93-11ec-b967-08c0eb32008b_304784882.jpg",
            title: "Product three",
            price: 300
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/7323ffdd-3fff-11ed-b96c-08c0eb32008b_1669197198.jpg",
            title: "Product four",
            price: 400
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/8621b85b-8808-11ec-ae6d-08c0eb320147_1952036370.jpg",
            title: "Product five",
            price: 500
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/69813_1517928215.jpg",
            title: "Product six",
            price: 600
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/112562_643953137.jpg",
            title: "Product seven",
            price: 700
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/124584_1965506859.jpg",
            title: "Product eight",
            price: 800
        },
        {
            url: "https://cm.samokat.ru/processed/m/public/9676203a013c263d_4670117690775-1.jpg",
            title: "Product one",
            price: 100
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/95fd4465-27a6-11ed-885a-08c0eb32014b_1636298318.jpg",
            title: "Product two",
            price: 200
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/948a127d-9f93-11ec-b967-08c0eb32008b_304784882.jpg",
            title: "Product three",
            price: 300
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/7323ffdd-3fff-11ed-b96c-08c0eb32008b_1669197198.jpg",
            title: "Product four",
            price: 400
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/8621b85b-8808-11ec-ae6d-08c0eb320147_1952036370.jpg",
            title: "Product five",
            price: 500
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/69813_1517928215.jpg",
            title: "Product six",
            price: 600
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/112562_643953137.jpg",
            title: "Product seven",
            price: 700
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/124584_1965506859.jpg",
            title: "Product eight",
            price: 800
        }

    ]
}
