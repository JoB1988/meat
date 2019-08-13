import { Http } from "@angular/http";
import { Restaurant } from "./restaurant/restaurant.model";
import { API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Injectable } from "@angular/core";
import { ErrorHandler } from "app/error-handler";

@Injectable()
export class RestaurantService{
    
    constructor(private http: Http){

    }

    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}