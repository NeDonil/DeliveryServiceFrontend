import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupsComponent } from './customer/groups/groups.component';
import { CustomerComponent } from './customer/customer.component';

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

import { GroupItemComponent } from './customer/groups/group-item/group-item.component';
import { MainComponent } from './customer/main/main.component';
import { SearchComponent } from './customer/main/search/search.component';
import { ProductsComponent } from './customer/main/products/products.component';
import { ProductComponent } from './customer/main/products/product/product.component';
import { UserComponent } from './customer/order/user/user.component';
import { BucketComponent } from './customer/order/bucket/bucket.component';
import { OrderComponent } from './customer/order/order.component';
import { AddressComponent } from './customer/order/address/address.component';
import { BucketItemComponent } from './customer/order/bucket/bucket-item/bucket-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    CustomerComponent,
    GroupItemComponent,
    MainComponent,
    SearchComponent,
    ProductsComponent,
    ProductComponent,
    UserComponent,
    BucketComponent,
    OrderComponent,
    AddressComponent,
    BucketItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, MatListModule, MatIconModule,
    FormsModule, MatFormFieldModule, MatInputModule,
    MatTooltipModule, MatButtonModule, MatAutocompleteModule,
    ReactiveFormsModule, AsyncPipe, MatDividerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
