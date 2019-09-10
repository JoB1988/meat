import { Component, OnInit } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { SnackbarService } from './snackbar.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: 0
      })),
      state('visible', style({
        opacity: 1,
        bottom: 30
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out')),
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  
  snackVisibility: string= 'hidden';
  message:string;

  constructor(public snackBarService: SnackbarService) {   }

   ngOnInit(): void {
    this.snackBarService.onChange$.do((value)=>{
      this.message=value
      this.snackVisibility = 'visible';
     })
    .switchMap(message => Observable.timer(3000))
    .subscribe(timer => this.snackVisibility='hidden')
  }

}
