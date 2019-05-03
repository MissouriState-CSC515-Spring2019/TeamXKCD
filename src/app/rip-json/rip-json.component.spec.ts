import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RipJSONComponent } from './rip-json.component';

describe('RipJSONComponent', () => {
  let component: RipJSONComponent;
  let fixture: ComponentFixture<RipJSONComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RipJSONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RipJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
