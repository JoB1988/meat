import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Injectable } from "@angular/core";
import { CarItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { SnackbarService } from "app/shared/messages/snackbar/snackbar.service";

@Injectable()
export class ShoppingCartService {

    items: CarItem[] = []

    constructor(private snackbarService: SnackbarService, ) {

    }
    // quando clicar para adicionar um item, o item do menu será passado por parâmetro para aqui,
    // o foundItem vai receber um objeto do tipo CarItem se já existir um objeto desses no array,
    // se não existir o objeto no array, ele vai acrescentar ao items, que é um array de CarItem,
    // um objeto do tipo CarItem
    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            // havendo o objeto, a variável quantity vai receber mais um
            this.increaseQty(foundItem)
        } else {
            this.items.push(new CarItem(item))
            this.snackbarService.onChange.next(`O item ${item.name} foi incluído com sucesso!`)
        }

    }

    //  remove item vai receber um objeto do tipo CarItem, o método vai no array e deleta aquele objeto
    removeItem(item: CarItem) {
        this.items.splice(this.items.indexOf(item), 1)
        this.snackbarService.onChange.next(`O item ${item.menuItem.name} foi removido com sucesso!`)
    }

    //  clear zera o array
    clear() {
        this.items = []
        this.snackbarService.onChange.next('Carrinho esvaziado com sucesso!')
    }
    
    // esse método vai no array
    total(): number {
        return this.items
        .map(item => item.value())
        .reduce((prev, value) => prev + value, 0)
    }
    
    increaseQty(item: CarItem) {
        item.quantity = item.quantity + 1;
        this.snackbarService.onChange.next(`Mais um ${item.menuItem.name} foi acrescentado com sucesso!`)
    }
    
    decreaseQty(item: CarItem) {
        item.quantity = item.quantity - 1;
        item.quantity === 0 ? this.removeItem(item) : null
        this.snackbarService.onChange.next(`Um ${item.menuItem.name} foi subtraido com sucesso!`)
    }

}