import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/items-list/item/item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { RouterModule } from '@angular/router';
import { ItemDetailsGuard } from './item-details.guard';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ItemsListComponent,
    ItemComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'items', component: ItemsListComponent },
      { path: 'items/:id', canActivate: [ ItemDetailsGuard ], component: ItemDetailsComponent },
      { path: '', component: MainPageComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
