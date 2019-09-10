import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { MenuItem } from '../menu-item/menu-item.model';
import { CarItem } from './cart-item.model';
import { state, trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  animations:[
    trigger('row',[
      state('ready', style({opacity:1})),
        transition('void => ready', animate('300ms 0s ease-in', keyframes([
          style({opacity:0, transform: 'translateX(-30px)', offset:0}),
          style({opacity:0.7, transform: 'translateX(30px)', offset:0.7}),
          style({opacity:1, transform: 'translateX(0px)', offset:1})
        ]))),
        transition('ready => void', animate('300ms 0s ease-out', keyframes([
          style({opacity:1, transform: 'translateX(0px)', offset:0}),
          style({opacity:0.7, transform: 'translateX(-30px)', offset:0.2}),
          style({opacity:0, transform: 'translateX(10px)', offset:1})
        ])))
      ])
    ]
})

export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }

  rowState='ready'

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
