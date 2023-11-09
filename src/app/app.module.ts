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
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import { GroupItemComponent } from './customer/groups/group-item/group-item.component';
import { MainComponent } from './customer/main/main.component';
import { SearchComponent } from './customer/main/search/search.component';
import { ProductsComponent } from './customer/main/products/products.component';
import { ProductComponent } from './customer/main/products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    CustomerComponent,
    GroupItemComponent,
    MainComponent,
    SearchComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, MatListModule, MatIconModule,
    FormsModule, MatFormFieldModule, MatInputModule,
    MatTooltipModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
