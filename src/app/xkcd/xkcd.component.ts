import { Component, OnInit } from '@angular/core';
import { RipJSONService } from '../rip-json.service';

@Component({
  selector: 'app-xkcd',
  templateUrl: './xkcd.component.html',
  styleUrls: ['./xkcd.component.css']
})
export class XkcdComponent implements OnInit {
  public rawData = [];
  constructor(private apiService: RipJSONService) {}

  ngOnInit() {
    this.apiService.getData()
      .subscribe(data => this.rawData = data);
  }
}