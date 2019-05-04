import { Component, OnInit } from '@angular/core';
import { RipJSONService } from '../rip-json.service';

@Component({
  selector: 'app-about-the-author',
  templateUrl: './about-the-author.component.html',
  styleUrls: ['./about-the-author.component.css']
})
export class AboutTheAuthorComponent implements OnInit {
  public rawData = [];
  constructor(private apiService: RipJSONService) {}

  ngOnInit() {
    // this.apiService.getData()
    //   .subscribe(data => this.rawData = data);
  }
}

