import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private apiService: ApiService) {}

  public getOrders(): Observable<any> {
    return this.apiService.get().pipe(map((res) => res.orders));
  }

  public getOrderById(orderId: string): Observable<any> {
    return this.apiService
      .get()
      .pipe(map((res) => res.orders.find((order) => order.id === orderId)));
  }
}
