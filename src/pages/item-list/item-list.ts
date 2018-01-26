import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";

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
    public data: DataProvider,
    private alertCtrl: AlertController
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
  onDeleteAll() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      subTitle: 'Deseja realmente excluir TODOS os itens?',
      buttons: [
        {text: 'Cancel'},
        {text: 'Delete ALL', handler: this.deleteAllItems.bind(this)}
      ]
    });
    alert.present();
  }
  deleteAllItems() {
    this.data.deleteAll();
  }
}
