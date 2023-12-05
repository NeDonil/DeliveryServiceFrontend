import { Component } from '@angular/core';
import {AuthService} from "../../../../auth/auth.service";
import {ADMIN_STATE} from "../../admin.state";
import {AdminService} from "../../../../service/admin.service";

@Component({
  selector: 'admin-main-screen',
  templateUrl: 'admin-main-screen.component.html'
})
export class AdminMainScreenComponent {

    constructor(private authService: AuthService,
                private adminService: AdminService) {}
    onLogoutClick() : void {
        this.authService.logout();
    }

    onPressed(state: ADMIN_STATE) : void {
        this.adminService.setCurrentState(state);
    }

    protected readonly ADMIN_STATE = ADMIN_STATE;
}
