import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Output() rated= new EventEmitter<boolean>()

  stars: number[] = [1, 2, 3, 4, 5]

  rate: number = 0;

  lastRate: number=0;

  mOver: number = 0;

  clicked: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  mouseOver() {
    if (this.rate > 0) {
      this.lastRate = this.rate;
      this.rate = 0;
    }
  }

  mouseLeave() {
    if(this.lastRate > 0 && !this.clicked)
      this.rate=this.lastRate
    this.clicked=false
  }

  ver(){
    console.log('mOver : '+this.mOver+' | lastRate: '+this.lastRate+' | rate: '+this.rate)
  }
}
