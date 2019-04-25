import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { XkcdDetailComponent } from './xkcd-detail/xkcd-detail.component';
import { XkcdComponent } from './xkcd/xkcd.component';

import { AppRoutingModule } from './app-routing.module';
import { AboutTheAuthorComponent } from './about-the-author/about-the-author.component';

@NgModule({
  declarations: [
    AppComponent,
    XkcdComponent,
    XkcdDetailComponent,
    DashboardComponent,
    AboutTheAuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
