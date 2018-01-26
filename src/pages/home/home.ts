
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemListPage } from '../item-list/item-list';
import { AddItemPage } from "../add-item/add-item";

//Components
import { AddNewDialogComponent } from '../../components/add-new-dialog/add-new-dialog';

// Providers
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController, 
    public data: DataProvider
  ) {
  }
  ionViewDidEnter() {
    this.data.getData().then((result) => {
      if (result == undefined) {
      }else{
        this.navCtrl.push(ItemListPage, {data: this.data.data});
      }
    });
  }
  onClickDialog() {
    this.navCtrl.push(AddItemPage);
  }

}
