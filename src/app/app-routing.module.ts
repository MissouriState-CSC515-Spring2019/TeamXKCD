import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { XkcdDetailComponent }  from './xkcd-detail/xkcd-detail.component';
import { AboutTheAuthorComponent } from './about-the-author/about-the-author.component';

const routes: Routes = [
  { path: '', redirectTo: '/comic', pathMatch: 'full' },
  { path: 'comic', component: DashboardComponent },
  { path: 'comic/:id', component: DashboardComponent },
  { path: 'info/:id', component: XkcdDetailComponent },
  { path: 'author', component: AboutTheAuthorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}