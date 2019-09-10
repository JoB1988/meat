import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class SnackbarService {
    
    public onChange = new Subject<string>();
    public onChange$ = this.onChange.asObservable();

    constructor(){ }

}