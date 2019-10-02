import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant/restaurant.model';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden';

  public restaurants: Restaurant[];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private restaurantService: RestaurantService, private fb: FormBuilder) { }

  ngOnInit() {
    this.restaurantService.restaurants().subscribe(data => this.restaurants = data);
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
    this.searchControl.valueChanges
    // debounceTime só permite que o observable seja escutado após o valor dentro do (), em milisegundos
    .debounceTime(500)
    // distinctUntilChanged compara o valor anterior ao debouceTime com o atual. Não permite que os outros métodos
    // sejam evocados caso sejam o mesmo
    .distinctUntilChanged()
    // switchMap é um observable que ao ouvir alterações chama o método
    .switchMap(searchTerm => this.restaurantService
      .restaurants(searchTerm)
      .catch(error => Observable.from([])))
    .subscribe(restaurants => this.restaurants = restaurants)
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
