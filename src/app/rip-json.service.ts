import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root', //not sure
})
export class RipJSONService {


  urlbase: string = "https://xkcd.com/";
  urlend: string = "info.0.json";
  
  whichAPI: boolean;
    
  constructor(/* private http: HttpClient */) { } //remove block comment later
  
  getData(){
        return //this.http.get(this.urlbase + + this.urlend).map(res => res.json()); //TODO finish url swap
  }
  
  geturl(){
    return 
  }
}
