import { Http } from "@angular/http";
import { API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Injectable } from "@angular/core";
import { ErrorHandler } from "app/error-handler";
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { Reviews } from "./reviews/reviews.model";
import { MenuItem } from "./menu-item/menu-item.model";

@Injectable()
export class RestaurantDetailService{
    
    constructor(private http: Http){

    }

    getRestaurantById(id:string): Observable<Restaurant>{
        return this.http.get(`${API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(restaurantId:string): Observable<Reviews[]>{
        return this.http.get(`${API}/restaurants/${restaurantId}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id:String):Observable<MenuItem[]>{
        return this.http.get(`${API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}