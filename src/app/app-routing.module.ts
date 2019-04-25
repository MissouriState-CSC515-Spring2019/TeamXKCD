import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { XkcdComponent }      from './xkcd/xkcd.component';
import { XkcdDetailComponent }  from './xkcd-detail/xkcd-detail.component';
import { AboutTheAuthorComponent } from './about-the-author/about-the-author.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: XkcdDetailComponent },
  { path: 'comics', component: XkcdComponent },
  { path: 'author', component: AboutTheAuthorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}