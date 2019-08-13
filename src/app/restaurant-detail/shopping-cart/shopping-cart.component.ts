import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { MenuItem } from '../menu-item/menu-item.model';
import { CarItem } from './cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {

  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  total(): number{
    return this.shoppingCartService.total()
  }

  clear():void{
    this.shoppingCartService.clear()
  }

  removeItem(item: CarItem){
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: MenuItem){
    this.shoppingCartService.addItem(item)
  }



}
