import {Component, Inject, OnInit} from '@angular/core';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html'
})
export class CustomerDetailsComponent implements OnInit {

    constructor(public dialogRef: DialogRef,
                @Inject(DIALOG_DATA) public data: any,
                private router: Router) {}

    ngOnInit() : void {

    }

    onLogoutPressed() : void {
        this.dialogRef.close();
        this.router.navigate(["/logout"]);
    }
}
