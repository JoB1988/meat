import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CarItem[]

  @Output() increase = new EventEmitter<CarItem>()
  @Output() decrease = new EventEmitter<CarItem>()
  @Output() remove = new EventEmitter<CarItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncrease(item: CarItem){
    this.increase.emit(item)
  }
  emitDecrease(item: CarItem){
    this.decrease.emit(item)
  }
  emitRemove(item: CarItem){
    this.remove.emit(item)
  }

}
