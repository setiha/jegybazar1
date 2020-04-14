import { Injectable } from '@angular/core';
import {EventModel} from './event-model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
private _events: EventModel[];
  constructor() {
    this._events = [
      {
        id: 1,
        name: 'Sziget Fesztivál',
        date: '2018-08-03T18:00:00',
        pictureURL: 'img/sziget.png',
        description: 'Nézd meg a grandiőzus balett előadást most elővételben'
      },
      {
        id: 2,
        name: 'Sziget Fesztivál',
        date: '2018-08-03T18:00:00',
        pictureURL: 'img/sziget.png',
        description: 'Nézd meg a grandiőzus balett előadást most elővételben'
      }
    ];
  }

  getAllEvents(): EventModel[]{
    return this._events;
  }
}
