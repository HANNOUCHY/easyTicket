import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopsComponent } from './shops/shops.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './orders/order/order.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
  { path: 'shops', component: ShopsComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'product', component: ProductComponent},
  { path: 'order', component: OrderComponent}];
