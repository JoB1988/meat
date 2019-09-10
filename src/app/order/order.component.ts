import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { RadioOption } from 'app/shared/radio/radio-option';
import { OrderService } from './order.service';
import { CarItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order';
import { Router } from '@angular/router';
import { SnackbarService } from 'app/shared/messages/snackbar/snackbar.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/
  orderForm: FormGroup

  public options: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Débito', value: 'DEB' },
    { label: 'Refeição', value: 'REF' }
  ]

  delivery: number = 8;

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      complemento: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');
    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CarItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(carItem: CarItem) {
    this.orderService.increaseQty(carItem)
  }

  decreaseQty(carItem: CarItem) {
    this.orderService.decreaseQty(carItem)
  }
  remove(carItem: CarItem) {
    this.orderService.remove(carItem);

  }
  checkOrder(order: Order) {
    // debugger
    order.orderItems = this.cartItems().map((item: CarItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe((menuId:string)=>{
      this.orderService.clear();
      this.router.navigate(['/order-summary']);
    })
  }
}
