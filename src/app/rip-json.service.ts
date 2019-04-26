import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { comicData } from './comicData'


@Injectable({
  providedIn: 'root',
})
export class RipJSONService {


  urlbase: string = "https://xkcd.com/";
  urlend: string = "info.0.json";
  urlmid: string = "";
  whichAPI: boolean;
    
  constructor(private http: HttpClient ) { }

  getData(): Observable<comicData[]>{
        //return //this.http.get(this.urlbase + urlmid + this.urlend).map(res => res.json()); //TODO finish url swap
        //return this.http.get<comicData[]>(this.urlbase + this.urlmid + this.urlend, httpOptions); //array?
        //https://xkcd.now.sh/
        return this.http.get<comicData[]>("https://xkcd.now.sh/1000"); //https://github.com/mrmartineau/xkcd-api
  }
  
  geturlType(){ //to add ability to go with eith recent api or specific comic api once urlscheme and routing is more set in stone
    //if()
  }
}
