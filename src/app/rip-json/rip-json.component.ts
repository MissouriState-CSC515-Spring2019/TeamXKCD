import { Component, OnInit } from '@angular/core';
import { ripJSON } from '../rip-json';

@Component({
  selector: 'app-rip-json',
  templateUrl: './rip-json.component.html',
  styleUrls: ['./rip-json.component.css']
})
export class RipJSONComponent implements OnInit {

public comic: any =[];



data: ripJSON = {
    id: 0,
    name: selectedcomic,
    
};




  constructor() { }

  ngOnInit() {
  }

}
