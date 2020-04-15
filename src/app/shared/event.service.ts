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
        pictureURL: 'assets/sziget.png',
        description: 'Nézd meg a grandiőzus balett előadást most elővételben'
      },
      {
        id: 2,
        name: 'Macskak',
        date: '2018-08-03T18:00:00',
        pictureURL: 'assets/macskak.jpg',
        description: 'Nézd meg a grandiőzus balett előadást most elővételben'
      },
      {
        id: 3,
        name: 'Diotoro',
        date: '2018-08-03T18:00:00',
        pictureURL: 'assets/diotoro.jpg',
        description: 'Nézd meg a grandiőzus balett előadást most elővételben'
      },
      {
        id: 4,
        name: 'Sziget Fesztivál',
        date: '2018-08-03T18:00:00',
        pictureURL: 'assets/sziget.png',
        description: 'Nézd meg a grandiőzus balett előadást most elővételben'
      },
      {
        id: 5,
        name: 'Macskak',
        date: '2018-08-03T18:00:00',
        pictureURL: 'assets/macskak.jpg',
        description: 'Nézd meg a grandiőzus balett előadást most elővételben'
      },
      {
        id: 6,
        name: 'Diotoro',
        date: '2018-08-03T18:00:00',
        pictureURL: 'assets/diotoro.jpg',
        description: 'Nézd meg a grandiőzus balett előadást most elővételben'
      },
      {
        id: 7,
        name: 'Sziget Fesztivál',
        date: '2018-08-03T18:00:00',
        pictureURL: 'assets/sziget.png',
        description: 'Nézd meg a grandiőzus balett előadást most elővételben'
      },
      {
        id: 8,
        name: 'Macskak',
        date: '2018-08-03T18:00:00',
        pictureURL: 'assets/macskak.jpg',
        description: 'Nézd meg a grandiőzus balett előadást most elővételben'
      },
      {
        id: 9,
        name: 'Diotoro',
        date: '2018-08-03T18:00:00',
        pictureURL: 'assets/diotoro.jpg',
        description: 'Nézd meg a grandiőzus balett előadást most elővételben'
      }
    ];
  }

  getAllEvents(): EventModel[]{
    return this._events;
  }
}
