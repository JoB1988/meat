import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations:[
    trigger('menuItemAppared',[
      state('ready', style({opacity:1})),
      transition('void => ready', [
        style({opacity:0, transform: 'translate(-30px, 10px)'}),
        animate('500ms 0s  ease-in-out')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()
  miState = 'ready'

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    //vai emitir o evento quando clicado, o evento passa um objeto do tipo menuItem para a classe pai
    this.add.emit(this.menuItem)
  }
}
