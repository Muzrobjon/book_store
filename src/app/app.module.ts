import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './productlist/productlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductaddComponent } from './productadd/productadd.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistorUserComponent } from './registor-user/registor-user.component';
import { JwtInterceptor } from './helper/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductlistComponent,
    NavbarComponent,
    ProductitemComponent,
    CartComponent,
    ProductaddComponent,
    RegistorUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }