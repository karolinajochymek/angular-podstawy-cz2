import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  items: Item[] = [];

  filter: string = '';

  constructor(private registeredService: DataService) { }

  get filteredItems(): Item[] {
    return this.items.filter(x => x.name?.toLocaleLowerCase()?.includes(this.filter.toLocaleLowerCase()))
  }

  ngOnInit(): void {
    this.items = this.registeredService.items;
  }

  onClickedItem(no: number) {
    this.items.forEach(item => {
      if (item.no !== no) {
        item.isClicked = false;
      } else {
        item.isClicked = true;
      }
    })
  }

}
