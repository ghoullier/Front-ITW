import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import {
  OrderDetailResolver,
  OrderListResolver,
} from '../../resolvers/order.resolver';

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent,
    resolve: {
      list: OrderListResolver,
    },
  },
  {
    path: ':orderId',
    component: OrderDetailComponent,
    resolve: {
      details: OrderDetailResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
