import { Injectable } from "@angular/core";
import { ShoppingCartComponent } from "app/restaurant-detail/shopping-cart/shopping-cart.component";
import { CarItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";

@Injectable()
export class OrderService{
    constructor(private cartService: ShoppingCartService){

    }

    cartItems(): CarItem[]{
        return this.cartService.items
    }

    increaseQty(item: CarItem) {
        this.cartService.increaseQty(item)
    }
    decreaseQty(item: CarItem){
        this.cartService.decreaseQty(item)
    }

    remove(carItem: CarItem){
        this.cartService.removeItem(carItem)
      }
}