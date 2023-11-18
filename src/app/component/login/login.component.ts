import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Credential } from 'src/app/auth/credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    credential!: Credential;
    errorAuth!: boolean;

    constructor(private authService: AuthService) {}

    ngOnInit(){
        this.authService.clearLoginData();
        this.credential = new Credential();
        this.authService.logoutWithoutRedirect();
    }

    login(){
        this.authService.authenticate(this.credential, () => {
            this.errorAuth = true;
        })
    }
}