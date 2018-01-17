
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemListPage } from '../item-list/item-list';
import { AddNewDialogPage } from '../add-new-dialog/add-new-dialog';

// Provider
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;
  constructor(public navCtrl: NavController, private data: DataProvider) {
  }
  ionViewDidEnter() {
    this.items = this.data.data;
    if (this.items == undefined){
      this.navCtrl.push(AddNewDialogPage);
    }else{
      this.navCtrl.push(ItemListPage, {data: this.items});
    }
  }

}
