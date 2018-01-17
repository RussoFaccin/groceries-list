import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';

/**
 * Generated class for the AddNewDialogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-dialog',
  templateUrl: 'add-new-dialog.html',
})
export class AddNewDialogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewDialogPage');
  }

  onAddNew() {
    this.navCtrl.push(AddItemPage);
  }

}
