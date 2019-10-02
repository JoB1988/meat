import { Injectable } from "@angular/core";
import { CarItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { API } from "app/app.api";
import { Order } from "./order";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: HttpClient) {

    }

    itemsValue(): number {
        return this.cartService.total()
    }

    cartItems(): CarItem[] {
        return this.cartService.items
    }

    increaseQty(item: CarItem) {
        this.cartService.increaseQty(item)
    }
    decreaseQty(item: CarItem) {
        this.cartService.decreaseQty(item)
    }

    remove(carItem: CarItem) {
        this.cartService.removeItem(carItem)
    }

    checkOrder(order: Order): Observable<string> {
        return this.http.post<Order>(`${API}/orders`, order).map(order => order.id)
    }

    clear() {
        this.cartService.clear()
    }
}