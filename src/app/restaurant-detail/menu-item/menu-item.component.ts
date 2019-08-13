import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    //vai emitir o evento quando clicado, o evento passa um objeto do tipo menuItem para a classe pai
    this.add.emit(this.menuItem)
  }
}
