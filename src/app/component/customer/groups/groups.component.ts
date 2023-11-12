import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/model/Group';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent implements OnInit{
    constructor(private customerService: CustomerService){}

    groups !: Group[];
    ngOnInit(){
        this.customerService.getAllGroups().subscribe(data => this.groups = data);
    }
}
