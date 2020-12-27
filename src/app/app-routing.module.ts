import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './services/auth.guard';
import { ProductaddComponent } from './productadd/productadd.component';
import { RegistorUserComponent } from './registor-user/registor-user.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'productslist',
    component: ProductlistComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'productitem',
    component: ProductitemComponent,
    // canActivate: [AuthGuard]
  },
  
  {
    path: 'cart',
    component: CartComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'productadd',
    component: ProductaddComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegistorUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
