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
            url: "https://cm.samokat.ru/processed/category/1694187180-pic1.jpg"
        },
        {
            text: "Milk",
            url: "https://cm.samokat.ru/processed/category/1694187180-pic1.jpg"
        },
        {
            text: "Stuff",
            url: "https://cm.samokat.ru/processed/category/1694187180-pic1.jpg"
        },
        {
            text: "Bio",
            url: "https://cm.samokat.ru/processed/category/1694187180-pic1.jpg"
        }
    ] ;
}
