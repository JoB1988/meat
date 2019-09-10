import { Injectable } from "@angular/core";
import { CarItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";
import { API } from "app/app.api";
import { Order } from "./order";
import { SnackbarService } from "app/shared/messages/snackbar/snackbar.service";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http) {

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
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(
            `${API}/orders`, JSON.stringify(order),
            new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .map(response => response.orderItems[0])
            .map(response => response.menuId)
    }

    clear() {
        this.cartService.clear()
    }
}