import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './component/customer/customer.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AssemblerComponent } from './component/assembler/assembler.component';
import { LogoutComponent } from './component/logout/logout.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch : "full"
    },
    {
        path: "logout",
        component : LogoutComponent
    },
    {
        path: "login",
        component : LoginComponent
    },
    {
        path: "customer",
        component : CustomerComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "assembler",
        component : AssemblerComponent,
        canActivate: [AuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
