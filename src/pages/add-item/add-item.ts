import { GroceryItem } from './../../app/groceryitem';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// Provider
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  item: GroceryItem = new GroceryItem('', undefined);
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private storage: Storage, private data: DataProvider) {}
  ionViewDidLoad() {}
  onAddNew() {
    this.data.saveData(this.item);
    this.navCtrl.pop();
  }
}
