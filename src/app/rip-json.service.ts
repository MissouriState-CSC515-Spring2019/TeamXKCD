import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { comicData } from './comicData'
import { DashboardComponent } from "./dashboard/dashboard.component";



@Injectable({
  providedIn: 'root',
})

export class RipJSONService {
 //to add error handling
  data: DashboardComponent

  urlbase: string = "https://xkcd.now.sh/";
  //urlend: string = ""; //this.data.rawData.length != 0 ? `${this.data.rawData.values.}` : "";
  //whichAPI: boolean;
    
  constructor(private http: HttpClient) { }
  
  getData(id: string): Observable<comicData[]>{
    if(id == "NaN"){
      id = "#";
    }

    return this.http.get<comicData[]>(this.urlbase + id) //https://github.com/mrmartineau/xkcd-api
      .pipe(
        retry(1),
        catchError(this.handleError),
      );
  }
  
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error("An error has occurred: ", error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    }
    return throwError(`Something messed up, just try again later. Error:  ${error.status}`);
  };

}
