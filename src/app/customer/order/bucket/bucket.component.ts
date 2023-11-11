import { Component } from '@angular/core';

export interface BucketItem{
    url: string;
    title: string;
    price: number;
    count: number;
}

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent {
    items: BucketItem[] = [
        {
            url: "https://cm.samokat.ru/processed/m/original/7323ffdd-3fff-11ed-b96c-08c0eb32008b_1669197198.jpg",
            title: "Product four",
            price: 400,
            count: 5
        },

        {
            url: "https://cm.samokat.ru/processed/m/original/112562_643953137.jpg",
            title: "Product seven",
            price: 700,
            count: 1
        },

        {
            url: "https://cm.samokat.ru/processed/m/original/124584_1965506859.jpg",
            title: "Product eight",
            price: 800,
            count: 3
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/124584_1965506859.jpg",
            title: "Product eight",
            price: 800,
            count: 3
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/124584_1965506859.jpg",
            title: "Product eight",
            price: 800,
            count: 3
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/124584_1965506859.jpg",
            title: "Product eight",
            price: 800,
            count: 3
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/124584_1965506859.jpg",
            title: "Product eight",
            price: 800,
            count: 3
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/124584_1965506859.jpg",
            title: "Product eight",
            price: 800,
            count: 3
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/124584_1965506859.jpg",
            title: "Product eight",
            price: 800,
            count: 3
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/124584_1965506859.jpg",
            title: "Product eight",
            price: 800,
            count: 3
        },
        {
            url: "https://cm.samokat.ru/processed/m/original/124584_1965506859.jpg",
            title: "Product eight",
            price: 800,
            count: 3
        },
    ]

}
