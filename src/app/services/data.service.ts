import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _items: Item[] = [{
      no: 1,
      name: 'One',
      quantity: 2,
      price: 25.34,
      isClicked: false
    }, {
      no: 2,
      name: 'Two',
      quantity: 4,
      price: 26.00,
      isClicked: false
    }, {
      no: 3,
      name: 'Three',
      quantity: 6,
      price: 5.12,
      isClicked: false
    },
      {}
  ];

  get items(): Item[] {
    return this._items;
  }

  constructor() { }
}
