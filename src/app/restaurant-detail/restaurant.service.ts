import { HttpClient } from "@angular/common/http";
import { API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Injectable } from "@angular/core";
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { Reviews } from "./reviews/reviews.model";
import { MenuItem } from "./menu-item/menu-item.model";

@Injectable()
export class RestaurantDetailService{
    
    constructor(private http: HttpClient){

    }

    getRestaurantById(id:string): Observable<Restaurant>{
        return this.http.get<Restaurant>(`${API}/restaurants/${id}`)
    }

    reviewsOfRestaurant(restaurantId:string): Observable<Reviews[]>{
        return this.http.get<Reviews[]>(`${API}/restaurants/${restaurantId}/reviews`)
    }

    menuOfRestaurant(id:String):Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`${API}/restaurants/${id}/menu`)
    }
}