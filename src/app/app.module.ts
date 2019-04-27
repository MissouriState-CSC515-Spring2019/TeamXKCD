import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RipJSONComponent } from './rip-json/rip-json.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { XkcdDetailComponent } from './xkcd-detail/xkcd-detail.component';
import { XkcdComponent } from './xkcd/xkcd.component';

import { AppRoutingModule } from './app-routing.module';
import { AboutTheAuthorComponent } from './about-the-author/about-the-author.component';

@NgModule({
  declarations: [
    AppComponent,
    RipJSONComponent,
    XkcdComponent,
    XkcdDetailComponent,
    DashboardComponent,
    AboutTheAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
