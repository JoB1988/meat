import { Component, OnInit} from '@angular/core';
import { NgModel} from '@angular/forms'
import { RadioOption } from 'app/shared/radio/radio-option';
import { OrderService } from './order.service';
import { CarItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public options: RadioOption[] = [
    {label:'Dinheiro',value:'MON'},
    {label:'Débito', value:'DEB'},
    {label:'Refeição', value:'REF'}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CarItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(carItem: CarItem){
    this.orderService.increaseQty(carItem)
  }

  decreaseQty(carItem: CarItem){
    this.orderService.decreaseQty(carItem)
  }
  remove(carItem: CarItem){
    this.orderService.remove(carItem)
  }

}
