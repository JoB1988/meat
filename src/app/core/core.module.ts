import { NgModule } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantService } from "app/restaurants/restaurant.service";
import { OrderService } from "app/order/order.service";
import { RestaurantDetailService } from "app/restaurant-detail/restaurant.service";

@NgModule({
    providers:[RestaurantDetailService, ShoppingCartService, RestaurantService, OrderService]
})

export class CoreModule {

}