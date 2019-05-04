import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RipJSONService } from '../rip-json.service';

@Component({
  selector: 'app-xkcd-detail',
  templateUrl: './xkcd-detail.component.html',
  styleUrls: ['./xkcd-detail.component.css']
})

export class XkcdDetailComponent implements OnInit {

  public rawData = [];
  constructor(
    private route: ActivatedRoute,
    private apiService: RipJSONService
  ) {}

  ngOnInit(): void {
    this.getComic();
  }

  getComic(): void {
    let id = '',
        route = location.pathname.split('/');
    if (route[1] === 'info' && route.length == 3) {
      id = route[2];
    } 
    this.apiService.getData(id)
      .subscribe(data => this.rawData = data);

    history.pushState({}, null, `/info/${id}`);
      }

}
