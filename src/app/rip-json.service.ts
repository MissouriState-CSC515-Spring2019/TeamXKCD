import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { comicData } from './comicData'
import { DashboardComponent } from "./dashboard/dashboard.component";



@Injectable({
  providedIn: 'root',
})

export class RipJSONService {
 //to add error handling
  data: DashboardComponent

  urlbase: string = "https://xkcd.now.sh/";
  urlend: string = ""; //this.data.rawData.length != 0 ? `${this.data.rawData.values.}` : "";
  whichAPI: boolean;
    
  constructor(private http: HttpClient) { }
  
  getData(id: string): Observable<comicData[]>{
    return this.http.get<comicData[]>(this.urlbase + id); //https://github.com/mrmartineau/xkcd-api
  }
  
  geturlType(){ //to add ability to go with eith recent api or specific comic api once urlscheme and routing is more set in stone
    //if()
  }
}
