import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class RipJSONService {
 //to add error handling
  urlbase: string = "https://xkcd.now.sh/";
  urlend: string = "";
  whichAPI: boolean;
    
  constructor(private http: HttpClient ) { }

  
  getData(){
        return this.http.get(this.urlbase + this.urlend); //https://github.com/mrmartineau/xkcd-api
  }
  
  geturlType(){ //to add ability to go with eith recent api or specific comic api once urlscheme and routing is more set in stone
    //if()
  }
}
