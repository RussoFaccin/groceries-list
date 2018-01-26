import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

// Providers
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'item-list',
  templateUrl: 'item-list.html'
})
export class ItemListComponent {
  text: string;

  constructor(public data: DataProvider) {
    console.log('Hello ItemListComponent Component');
    this.text = 'Hello World';
  }
  onAddToBasket(item: any, index: number) {
    item.isInBasket = true;
    this.data.updateData(item, index);
  }
  onDeleteItem(key: number) {
    this.data.deleteData(key);
  }
}
