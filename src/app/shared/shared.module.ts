import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RestaurantDetailService } from "app/restaurant-detail/restaurant.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantService } from "app/restaurants/restaurant.service";
import { OrderService } from "app/order/order.service";
import { MessagesComponent } from './messages/messages.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { SnackbarService } from "./messages/snackbar/snackbar.service";

@NgModule({
    declarations: [InputComponent, RadioComponent, MessagesComponent, SnackbarComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [InputComponent, RadioComponent, FormsModule, ReactiveFormsModule, CommonModule, SnackbarComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [RestaurantDetailService, ShoppingCartService, RestaurantService, OrderService, SnackbarService]
        }
    }
}