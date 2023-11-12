import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './component/customer/customer.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: "login",
        component : LoginComponent
    },
    {
        path: "customer",
        component : CustomerComponent,
        canActivate: [AuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
