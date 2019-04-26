import { Component, OnInit } from '@angular/core';
import { xkcdData } from '../xkcdData';
import { RipJSONService } from '../rip-json.service';

@Component({
  selector: 'app-rip-json',
  templateUrl: './rip-json.component.html',
  styleUrls: ['./rip-json.component.css']
})
export class RipJSONComponent implements OnInit {

  constructor(private api: RipJSONService) {}

  data: xkcdData = {
    month: "2",
    comicnum: 9999,
    link: "url",
    year: "1972",
    news: "",
    safe_title: "string",
    transcript: "string",
    altText: "hello, this is altText",
    comicIMG: "comicURLHERE",
    title: "testTIME",
    day: "32"
  };

  ngOnInit() {
    //this.api
      //.getData//TODO
  }

  getData(): void{
    //this.api.getData()
      //.subscribe(data => this.data = data);
  }

}
