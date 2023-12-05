import {Component, OnInit} from '@angular/core';
import {ADMIN_STATE} from "./admin.state";
import {AdminService} from "../../service/admin.service";

@Component({
    selector: 'app-admin',
    templateUrl: 'admin.component.html'
})
export class AdminComponent implements OnInit {

    currentState = ADMIN_STATE.MAIN;

    constructor(private adminService: AdminService) {
    }

    ngOnInit() : void {
        this.adminService.getCurrentState()
            .subscribe( (state) => this.currentState = state);
    }

    protected readonly ADMIN_STATE = ADMIN_STATE;
}
