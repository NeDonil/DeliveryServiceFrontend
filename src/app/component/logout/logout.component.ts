import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html' 
})
export class LogoutComponent {
    constructor(private authService: AuthService){}

    logout(): void {
        this.authService.logout();
    }
}
