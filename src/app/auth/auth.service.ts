import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Credential } from './credential';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ROLE } from './role';
import { CredentialResponse } from './model/auth/credentialResponse';
import { Authority } from './model/auth/authority';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(
        private router: Router,
        private http: HttpClient,
        private sessionStorage: SessionStorageService
        ){
            const auth = this.sessionStorage.get('auth');
            this.loggedIn.next(this.isAuthNotEmpty(auth));
    }

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    get LoggedUser(): CredentialResponse {
        const auth = this.sessionStorage.get('auth');

        if(auth == null || auth == "") {
            return new CredentialResponse();
    }

        return JSON.parse(auth);
    }

    isCustomer(): boolean {
        return this.LoggedUser.authorities.filter((auth: Authority) => {
            return auth.authority == ROLE.CUSTOMER;
        }).length != 0;
    }

    isAssembler(): boolean {
        return this.LoggedUser.authorities.filter((auth: Authority) => {
            return auth.authority == ROLE.ASSEMBLER;
        }).length != 0;
    }

    isCourier(): boolean {
        return this.LoggedUser.authorities.filter((auth: Authority) => {
            return auth.authority == ROLE.COURIER;
        }).length != 0;
    }

    static checkAuthUser(auth: CredentialResponse, role: string): boolean {
        let access = false;
        if (auth != null && auth.authorities !== null) {
            auth.authorities.some((el) => {
                access = el.authority === role;
                return access;
            });
        }
        return access;
    }

    static checkSection(url: string, section: string): boolean {
        return url.indexOf(section) == 0;
    }

    authenticate(crdls: Credential, failureHandler: any) {
        const headers = new HttpHeaders(crdls ? {
        authorization: 'Basic ' + btoa(crdls.email + ':' + crdls.password),
        "X-Requested-With": "XMLHttpRequest"
        } : {});

        this.authentication(headers).subscribe((data: CredentialResponse) => {
            if (data != null) {
                this.responseProcessing(data, failureHandler);
            }
        });
    }

    private responseProcessing(data: any, failureHandler: any) {
        const response: CredentialResponse = CredentialResponse.convertToObj(data);

        if(response.authenticated == true) {
            this.updateAuth(response);
            this.loggedIn.next(true);
            if(this.isCustomer()){
                this.router.navigate(['customer']);
            } else if(this.isAssembler()){
                this.router.navigate(['assembler']);
            } else if(this.isCourier()){
                this.router.navigate(['courier']);
            } 
            return true;
        }
        else {
            failureHandler();
        }

        return false;
    }

    private updateAuth(response: CredentialResponse) {
        this.sessionStorage.set('auth', JSON.stringify(response));
    }

    logout() {
        this.clearLoginData();
        this.http.post('api/logout', {}).subscribe(response => {
            console.log(this.LoggedUser);
            this.router.navigateByUrl('/login');
        });
    }

    logoutWithoutRedirect(){
        //Todo
    }

    clearLoginData() {
        this.loggedIn.next(false);
        this.sessionStorage.remove('auth');
    }

    authentication(headers: any): Observable<any> {
        return this.http.get('api/auth', { headers: headers })
            .pipe(
                tap(data => console.log('login data:', data)),
                catchError(this.handleLoginError('login error', []))
            );
    }

    private isAuthNotEmpty = (auth: string) => {
        return auth != null && auth != "";
    };

    private handleLoginError<T>(operation = 'operation', result?: T) {
        console.log('handleLoginError');
        debugger;
        return (error: any): Observable<T> => {
            if(error.status === 401) {
                this.loggedIn.next(false);
                return of(result as T);
            }
            else if(error.status == 404) {
                this.loggedIn.next(false);
                // @ts-ignore
                return of (
                    {
                        errorStatus: error.status
                    }
                );
            }
            
            return of(result as T);
        };
    }
}
