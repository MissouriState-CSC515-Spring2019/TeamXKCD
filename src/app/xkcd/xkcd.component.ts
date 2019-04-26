import { Component, OnInit } from '@angular/core';

import { Comic } from '../xkcd';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-xkcd',
  templateUrl: './xkcd.component.html',
  styleUrls: ['./xkcd.component.css']
})
export class XkcdComponent implements OnInit {
  
  comics: Comic[];

  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.getComics();
  }

  getComics(): void {
    this.comicService.getComics()
      .subscribe(comics => this.comics = comics);  }

}
