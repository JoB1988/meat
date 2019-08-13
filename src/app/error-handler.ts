import {Response} from "@angular/http"
import { Observable } from "rxjs/Observable";

export class ErrorHandler{
    static handleError(error: Response | any){
        let errorMessage: string
        if(error instanceof Response){
            errorMessage=`Erro ${error.status} ao acessar URL  ${error.url} - ${error.statusText}`
        }
        else{
            errorMessage=error.toString()
        }
        alert(errorMessage)
        return Observable.throw(errorMessage)
    }
}