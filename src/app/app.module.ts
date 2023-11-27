import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { SessionStorageService } from 'angular-web-storage';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule} from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { AsyncPipe } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';

import { CustomerComponent } from './component/customer/customer.component';
import { GroupsComponent } from './component/customer/groups/groups.component';
import { MainComponent } from './component/customer/main/main.component';
import { ProductCartComponent } from './component/customer/main/product-cart/product-cart.component';
import { OrderComponent } from './component/customer/order/order.component';
import { OrderItemComponent } from './component/customer/order/order-item/order-item.component';
import { LoginComponent } from './component/login/login.component';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { GroupItemComponent } from './component/customer/groups/group-item/group-item.component';
import { AddressComponent } from './component/customer/order/address/address.component';
import { AddressItemComponent } from './component/customer/order/address/address-item/address-item.component';
import { AssemblerComponent } from './component/assembler/assembler.component';
import { WaitingComponent } from './component/assembler/screen/waiting/waiting.component';
import { AssemblerOrderComponent } from './component/assembler/screen/waiting/order/assembler-order.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AssemblyComponent } from './component/assembler/screen/assembly/assembly.component';
import { AssemblyItemComponent } from './component/assembler/screen/assembly/assembly-item/assembly-item.component';
import { CourierComponent } from './component/courier/courier.component';
import { CourierWaitingComponent } from './component/courier/screen/courier-waiting/courier-waiting.component';
import { CourierOrderComponent } from './component/courier/screen/courier-waiting/courier-order/courier-order.component';
import { DeliveryComponent } from './component/courier/screen/delivery/delivery.component';
import { CommentComponent } from './component/customer/order/comment/comment.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { UserProfileComponent } from './component/customer/user-profile/user-profile.component';
import { CustomerDetailsComponent } from './component/customer/dialogs/customer-details/customer-details.component';
import {DialogModule, DialogRef} from "@angular/cdk/dialog";
import {MatDialogRef} from "@angular/material/dialog";

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent, CustomerComponent, GroupsComponent, MainComponent,
    MainComponent, ProductCartComponent, OrderComponent, OrderItemComponent,
    LoginComponent,
    GroupItemComponent,
    AddressComponent,
    AddressItemComponent,
    AssemblerComponent,
    WaitingComponent,
    AssemblerOrderComponent,
    LogoutComponent,
    AssemblyComponent,
    AssemblyItemComponent,
    CourierComponent,
    CourierWaitingComponent,
    CourierOrderComponent,
    DeliveryComponent,
    CommentComponent,
    UserProfileComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, BrowserAnimationsModule,
    MatCardModule, MatListModule, MatIconModule,FormsModule,
    MatFormFieldModule, MatInputModule, MatTooltipModule,
    MatButtonModule, MatAutocompleteModule, ReactiveFormsModule,
    AsyncPipe, MatDividerModule, ScrollingModule,MatGridListModule,
    MatGridListModule, MatPaginatorModule, HttpClientModule, MatMenuModule,
    OverlayModule, DialogModule
  ],
  providers: [
      SessionStorageService,
      provideAnimations(),
      {
          provide: LOCALE_ID, useValue: 'ru'
      },
      {
          provide: DialogRef,
          useValue: {
              close: (dialogResult: any) => { }
          }
      }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
