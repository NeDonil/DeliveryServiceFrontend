import { Component } from '@angular/core';
import {AuthService} from "../../../../auth/auth.service";
import {ADMIN_STATE} from "../../admin.state";
import {AdminService} from "../../../../service/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'admin-main-screen',
  templateUrl: 'admin-main-screen.component.html'
})
export class AdminMainScreenComponent {

    constructor(private adminService: AdminService,
                private router : Router) {}
    onLogoutClick() : void {
        this.router.navigate(['logout']);
    }

    onPressed(state: ADMIN_STATE) : void {
        this.adminService.setCurrentState(state);
    }

    onDashboardPressed() : void {
        this.router.navigate(['dashboard']);
    }

    protected readonly ADMIN_STATE = ADMIN_STATE;
}
