import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ItemDetailsGuard } from "src/app/services/guards/item-details.guard";
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { ItemComponent } from "./items-list/item/item.component";
import { ItemsListComponent } from "./items-list/items-list.component";

@NgModule({
    declarations: [
      ItemsListComponent,
      ItemComponent,
      ItemDetailsComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild([
        { path: 'items', component: ItemsListComponent },
        { path: 'items/:id', canActivate: [ ItemDetailsGuard ], component: ItemDetailsComponent }])
    ]
  })
  export class ItemModule { }