import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {
    constructor(private authService: AuthService,
                private location : Location){}

    logout(): void {
        this.authService.logout();
    }

    cancel(): void {
        this.location.back();
    }
}
