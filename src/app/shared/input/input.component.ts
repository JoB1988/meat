import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  ngAfterContentInit(): void {
    this.input = this.model
    if(this.input === undefined)
      throw new Error('Esse componente prescisa ser usado com ngModel')
  }

  @Input() label: string
  @Input() errormsg:string
  @ContentChild(NgModel) model : NgModel
  input:any

  constructor() { }

  ngOnInit() {
  }

  hasError(){
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
  hasSuccess(){
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

}
