import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderModel } from '../../../models/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  details: Observable<OrderModel>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.details = this.route.data.pipe(map((data) => data.details));
  }
}
