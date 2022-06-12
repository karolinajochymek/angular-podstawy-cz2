import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl ='https://localhost:5001/api/items'

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

  getProducts(): Observable<Item[]> {
    return this.http.get(this.dataUrl) as Observable<Item[]>;
  }

  getProductDetails(id: number | null): Observable<Item> {
      return this.http.get(`${this.dataUrl}/${id}`) as Observable<Item>;
  }

  constructor(private http: HttpClient) { }
}
