import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>RadioComponent),
      multi:true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value:any
  onChange: any;

  constructor() { }

  ngOnInit() {
  }
  
  writeValue(obj: any): void {
    this.value=obj
  }
  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }
  setValue(value){
    this.value = value;
    this.onChange(this.value)
  }
}