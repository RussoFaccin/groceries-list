
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AddItemPage } from "../add-item/add-item";

//Components
import { AddNewDialogComponent } from '../../components/add-new-dialog/add-new-dialog';
import { ItemListComponent } from '../../components/item-list/item-list';

// Providers
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController, 
    public data: DataProvider,
    private alertCtrl: AlertController
  ) {
  }
  ionViewDidEnter() {
    this.data.getData();
  }
  onClickDialog() {
    this.navCtrl.push(AddItemPage);
  }
  onAddNewItem() {
    this.navCtrl.push(AddItemPage);
  }
  onAddToBasket(item: any) {
    item.isInBasket = true;
  }
  onDeleteItem(item: any) {
    this.data.deleteData(String(item))
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
    this.data.items = null;
  }

}
