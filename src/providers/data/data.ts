import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
// Classes
import { GroceryItem } from '../../app/groceryitem';

@Injectable()
export class DataProvider {
  items: GroceryItem[];
  constructor(private storage: Storage) {
    this.storage.get('items').then((val) => {
    this.items = val;
    });
  }
  get data() {
    return this.items;
  }
  saveData(item: GroceryItem) {
    if (this.data == undefined) {
      this.items = [item];
    }else{
      this.items.push(item);
    }

    console.log('DATA:', this.data);
    this.storage.set('items', this.data);
  }
}

const fakeData: GroceryItem[] = [
  {name: 'Item #01', qtd: 1},
  {name: 'Item #02', qtd: 2},
  {name: 'Item #03', qtd: 3},
  {name: 'Item #04', qtd: 4},
  {name: 'Item #05', qtd: 5}
];
