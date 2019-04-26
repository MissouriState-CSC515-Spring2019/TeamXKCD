import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Comic } from './xkcd';
import { COMICS } from './mock-comics';

@Injectable({ providedIn: 'root' })
export class ComicService {

  constructor() { }

  getComics(): Observable<Comic[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(COMICS);
  }

  getComic(id: number): Observable<Comic> {
    // TODO: send the message _after_ fetching the hero
    return of(COMICS.find(comic => comic.id === id));
  }
}
