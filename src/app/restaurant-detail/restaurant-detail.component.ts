import { Component, OnInit } from '@angular/core';
import { RestaurantDetailService } from './restaurant.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  public restaurant: Restaurant
  private restaurantId: string

  constructor(private restaurantDetailService:RestaurantDetailService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantId = this.route.snapshot.params['id'] //pega o id da rota 
    this.restaurantDetailService.getRestaurantById(this.restaurantId).subscribe(restaurant => this.restaurant = restaurant)
  }

}
