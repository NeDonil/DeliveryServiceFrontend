import {Component, OnInit} from '@angular/core';
import {NewUser} from "../../auth/new-user";
import {RegisterStatus} from "./RegisterStatus";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    newUser !: NewUser;
    verifyPassword = '';
    status !: RegisterStatus;

    constructor(private authService: AuthService) {
    }

    ngOnInit() : void {
        this.newUser = new NewUser();
    }
    onRegisterPressed() : void {
        if(this.newUser.password == this.verifyPassword){
            this.register();
        } else {
            this.status = RegisterStatus.VERIFY_PASSWORD_FAILED;
        }
    }

    register() : void {
        this.authService.register(this.newUser)
            .subscribe( (data) => {
                this.authService.authenticate({email: data.email, password: data.password}, (data : any) => {
                    console.log(data);
                    this.RegisterStatus.EMAIL_ALREADY_USE;
                })
            })
    }

    protected readonly RegisterStatus = RegisterStatus;
}
