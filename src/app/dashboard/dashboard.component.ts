import { Component, OnInit } from '@angular/core';
import { RipJSONService } from '../rip-json.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  public rawData = [];
  constructor(private apiService: RipJSONService) {}

  ngOnInit() {
    this.apiService.getData()
      .subscribe(data => this.rawData = data);
  }
}