
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemListPage } from '../item-list/item-list';
import { AddNewDialogPage } from '../add-new-dialog/add-new-dialog';
//Component
import { AddNewDialogComponent } from '../../components/add-new-dialog/add-new-dialog';

// Provider
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private data: DataProvider) {
  }
  ionViewDidEnter() {
    console.log('DATA: ', this.data.data);
    this.data.getData().then((result) => {
      if (result == undefined) {
        this.navCtrl.push(AddNewDialogPage);
      }else{
        this.navCtrl.push(ItemListPage, {data: this.data.data});
      }
    });
  }

}
