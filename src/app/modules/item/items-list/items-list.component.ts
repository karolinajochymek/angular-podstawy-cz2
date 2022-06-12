import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  items: Item[] = [];
  items$: Subscription = new Subscription();

  filter: string = '';

  constructor(private registeredService: DataService) { }

  get filteredItems(): Item[] {
    return this.items.filter(x => x.name?.toLocaleLowerCase()?.includes(this.filter.toLocaleLowerCase()))
  }

  ngOnInit(): void {
    this.items$ = this.registeredService.getProducts().subscribe(data => {
      this.items = data
      console.log('event next')
    },
    error => console.log('event error'),
    () => console.log('event complete')
    );
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
  
  ngOnDestroy(): void {
    this.items$.unsubscribe();
  }

}
