import { Component } from '@angular/core';

export interface Group{
    text: string;
    url : string
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent {
    groups : Group[] = [
        {
            text: "General",
            url: "https://cm.samokat.ru/processed/category/4ccedaf7-4296-42fe-9519-6f04e78704ab.jpg"
        },
        {
            text: "Stuff",
            url: "https://cm.samokat.ru/processed/category/7616007d-fb2a-4168-afdf-b0d5fbdc38a3.jpg"
        },
        {
            text: "Milk",
            url: "https://cm.samokat.ru/processed/public/9ecb524e05b2b4b3_________________________.jpg"
        },
        {
            text: "Bread",
            url: "https://cm.samokat.ru/processed/original/160441_349334568.jpg"
        },
        {
            text: "Meal",
            url: "https://cm.samokat.ru/processed/public/b6db88b1e3657695______________7.jpg"
        },

        {
            text: "Candy",
            url: "https://cm.samokat.ru/processed/category/186dd558-e7ec-4309-a576-abc39bc18202.jpg"
        },

        {
            text: "Snack",
            url: "https://cm.samokat.ru/processed/public/fd4a6ecb80cdacae_pepsico_3.jpg"
        },

        {
            text: "Water",
            url: "https://cm.samokat.ru/processed/original/88488_1136633278.jpg"
        },

        {
            text: "Grocery ",
            url: "https://cm.samokat.ru/processed/original/153793_1354391565.jpg"
        },
        
    ] ;
}
