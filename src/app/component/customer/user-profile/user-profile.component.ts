import {Component, OnInit} from '@angular/core';
import {CustomerDetailsService} from "../../../service/customer-details.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html'
})
export class UserProfileComponent implements OnInit{

    fio !: string;
    constructor( private customerDetailsService : CustomerDetailsService) {}

    ngOnInit() : void {
        this.customerDetailsService.fio
            .subscribe((data) => this.fio = data);
    }
}
