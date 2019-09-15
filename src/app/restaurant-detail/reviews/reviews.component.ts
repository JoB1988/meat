import { Component, OnInit } from '@angular/core';
import { RestaurantDetailService } from '../restaurant.service';
import { Reviews } from './reviews.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'mt-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

    public reviews: Observable<Reviews[]>
    private restaurantId:string

    constructor(private restaurantDetailService: RestaurantDetailService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.restaurantId = this.activatedRoute.parent.snapshot.params['id'] //pega o id do component pai na rota
        this.reviews = this.restaurantDetailService.reviewsOfRestaurant(this.restaurantId)
    }

}
