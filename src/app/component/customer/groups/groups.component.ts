import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Group } from 'src/app/model/Group';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html'
})

export class GroupsComponent implements OnInit{
    constructor(private productService: ProductService){}

    groups : Group[] = [];

    ngOnInit(){
        this.productService.getAllGroups().subscribe(data => this.groups = data);
    }

    onGroupSelected(group: Group){
        this.productService.getProductsInGroup(group.id).subscribe(data => console.log(data));
    }
}
