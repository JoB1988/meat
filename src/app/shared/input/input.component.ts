import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  ngAfterContentInit(): void {
    this.input = this.model || this.control
    if(this.input === undefined)
      throw new Error('Esse componente prescisa ser usado com ngModel ou FormControName')
  }

  @Input() label: string
  @Input() errormsg:string
  @ContentChild(NgModel) model : NgModel
  @ContentChild(FormControlName) control : FormControlName
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
