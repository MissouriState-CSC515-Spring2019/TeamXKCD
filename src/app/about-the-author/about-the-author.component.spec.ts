import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheAuthorComponent } from './about-the-author.component';

describe('AboutTheAuthorComponent', () => {
  let component: AboutTheAuthorComponent;
  let fixture: ComponentFixture<AboutTheAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTheAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
