import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { OrderModel } from 'src/app/models/order.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  list: Observable<OrderModel[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.list = this.route.data.pipe(map((data) => data.list));
  }
}
