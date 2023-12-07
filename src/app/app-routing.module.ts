import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './component/customer/customer.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AssemblerComponent } from './component/assembler/assembler.component';
import { LogoutComponent } from './component/logout/logout.component';
import { CourierComponent } from './component/courier/courier.component';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {RegisterComponent} from "./component/register/register.component";
import {AdminComponent} from "./component/admin/admin.component";
import {ROLE} from "./auth/role";

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
        path: "register",
        component : RegisterComponent
    },
    {
        path: "customer",
        component : CustomerComponent,
        canActivate: [AuthGuard],
        data : {role : ROLE.CUSTOMER}
    },
    {
        path: "assembler",
        component : AssemblerComponent,
        canActivate: [AuthGuard],
        data : {role : ROLE.ASSEMBLER}
    },
    {
        path: "courier",
        component : CourierComponent,
        canActivate: [AuthGuard],
        data : {role : ROLE.COURIER}
    },
    {
        path: "admin",
        component : AdminComponent,
        canActivate: [AuthGuard],
        data : {role : ROLE.ADMIN}
    },
    {
        path: "dashboard",
        component : DashboardComponent,
        canActivate: [AuthGuard],
        data : {role : ROLE.ADMIN}
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
