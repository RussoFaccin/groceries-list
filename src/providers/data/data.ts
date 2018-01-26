import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
// Classes
import { GroceryItem } from "../../app/groceryitem";

@Injectable()
export class DataProvider {
  items: GroceryItem[];
  constructor(private storage: Storage) {}
  get data() {
    return this.items;
  }
  getData() {
    let self = this;
    return new Promise((resolve, reject) => {
      self.storage.get("items").then(result => {
        this.items = result;
        resolve(this.items);
      });
    });
  }
  save() {
    this.storage.set("items", this.items);
  }
  saveData(item: GroceryItem) {
    if (this.items == undefined) {
      this.items = [item];
    } else {
      this.items.push(item);
    }
    this.storage.set("items", this.items);
  }
  updateData(data: any, key: number) {
    this.items[key] = data;
    this.save();
    
  }
  deleteData(key: any) {
    this.items.splice(key, 1);
    this.save();
    
    // this.storage.set("items", this.items);
  }
  deleteAll() {
    this.storage.clear();
    this.items = null;
  }
}
