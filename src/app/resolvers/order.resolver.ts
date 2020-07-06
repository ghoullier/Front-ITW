import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  Router,
} from '@angular/router';

import { OrderService } from '../services/order.service';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailResolver implements Resolve<any> {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.orderService.getOrderById(route.params.orderId);
  }
}

@Injectable({
  providedIn: 'root',
})
export class OrderListResolver implements Resolve<any> {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.orderService.getOrders();
  }
}
