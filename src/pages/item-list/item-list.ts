import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

// Pages
import { AddItemPage } from "../add-item/add-item";

// Provider
import { DataProvider } from "../../providers/data/data";

/**
 * Generated class for the ItemListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-item-list",
  templateUrl: "item-list.html"
})
export class ItemListPage {
  items: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: DataProvider
  ) {
    this.items = this.navParams.get("data");
  }

  ionViewDidLoad() {
    this.items = this.data.data;
  }

  onAddNewItem() {
    this.navCtrl.push(AddItemPage);
  }
  onAddToBasket(item: any) {
    item.isInBasket = true;
  }
  onDeleteItem(item: any) {
    this.items.splice(item, 1);
  }
}
