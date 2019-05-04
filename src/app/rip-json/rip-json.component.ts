import { Component, OnInit } from '@angular/core';
import { RipJSONService } from '../rip-json.service';

@Component({
  selector: 'app-rip-json',
  templateUrl: './rip-json.component.html',
  styleUrls: ['./rip-json.component.css']
})
export class RipJSONComponent implements OnInit {
  public rawData = [];
  constructor(private apiService: RipJSONService) {}

  ngOnInit() {
    // this.apiService.getData()
    //   .subscribe(data => this.rawData = data);
  }
}
