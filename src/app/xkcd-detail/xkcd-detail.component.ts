import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Comic } from '../xkcd';
import { ComicService }  from '../comic.service';

@Component({
  selector: 'app-xkcd-detail',
  templateUrl: './xkcd-detail.component.html',
  styleUrls: ['./xkcd-detail.component.css']
})
export class XkcdDetailComponent implements OnInit {
  comic: Comic;
  
  constructor(
    private route: ActivatedRoute,
    private comicService: ComicService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getComic();
  }
  
  getComic(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.comicService.getComic(id)
      .subscribe(comic => this.comic = comic);
  }

  goBack(): void {
    this.location.back();
  }

}
