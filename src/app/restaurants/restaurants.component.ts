import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant/restaurant.model';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  
})
export class RestaurantsComponent implements OnInit {


  private restaurants : Restaurant[]

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.restaurants().subscribe(data => this.restaurants = data)
  }

}
