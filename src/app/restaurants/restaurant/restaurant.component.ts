import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  animations:[
    trigger('restaurantAppared',[
      state('ready', style({opacity:1})),
      transition('void => ready', [
        style({opacity:0, transform: 'translate(-30px, 10px)'}),
        animate('500ms 0s  ease-in-out')
      ])
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  rState = 'ready'

  @Input() restaurant:Restaurant

  constructor() { }

  ngOnInit() {
  }

}
