import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RipJSONService } from '../rip-json.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  public rawData = [];
  constructor(
    private route: ActivatedRoute,
    private apiService: RipJSONService
  ) {}

  ngOnInit(): void {
    this.getComic();
  }

  getComic(): void {
    console.log(location.pathname);
    let id = '',
        route = location.pathname.split('/');
    if (route[1] === 'comic' && route.length == 3) {
      id = route[2];
    } 
    this.apiService.getData(id)
      .subscribe(data => this.rawData = data);
    history.pushState({}, null, `/comic/${id}`);
  }

  prevComic(comicNum): void {
    comicNum = (comicNum-1).toString();
    this.apiService.getData(comicNum)
      .subscribe(data => this.rawData = data);
    history.pushState({}, null, `/comic/${comicNum}`);
  }

  nextComic(comicNum): void {
    comicNum = (comicNum+1).toString();
    this.apiService.getData(comicNum)
      .subscribe(data => this.rawData = data);
    history.pushState({}, null, `/comic/${comicNum}`);
  }

}