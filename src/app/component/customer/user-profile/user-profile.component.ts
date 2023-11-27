import {Component, OnInit} from '@angular/core';
import {CustomerDetailsService} from "../../../service/customer-details.service";
import {Dialog, DialogRef} from "@angular/cdk/dialog";
import {CustomerDetailsComponent} from "../dialogs/customer-details/customer-details.component";
import {data} from "autoprefixer";
import {Customer} from "../../../model/Customer";

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html'
})
export class UserProfileComponent implements OnInit{

    customer !: Customer;
    constructor( private customerDetailsService : CustomerDetailsService,
                 public dialog: Dialog) {}

    openDialog() : void {
        this.dialog.open<string>(CustomerDetailsComponent,
            {data : this.customer}
        )
    }

    ngOnInit() : void {
        this.customerDetailsService.customer
            .subscribe((data) => this.customer = data);
    }
}
