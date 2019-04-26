import { Injectable } from '@angular/core';

import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class RipJSONService {
    
  urlbase: string = "https://xkcd.com/";
  urlend: string = "info.0.json";
  
  whichAPI: boolean;
    
  constructor(private _http: Http) { }
  
  getData(){
        return this._http.get(this.url + )
  }
  
  geturl(){
  
  }
}
