import { HttpClient, HttpParams } from "@angular/common/http";
import { Restaurant } from "./restaurant/restaurant.model";
import { API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Injectable } from "@angular/core";

@Injectable()
export class RestaurantService{
    
    constructor(private http: HttpClient){ }

    restaurants(search?: string): Observable<Restaurant[]>{
        let params: HttpParams = undefined;
        if(search) {
            params = new HttpParams().set('q', search)
        }
        return this.http.get<Restaurant[]>(`${API}/restaurants`, {params: params})
    }
}