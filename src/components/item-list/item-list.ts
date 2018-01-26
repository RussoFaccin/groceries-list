import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

// Components
import { AllInBasketComponent } from '../../components/all-in-basket/all-in-basket';

// Providers
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'item-list',
  templateUrl: 'item-list.html'
})
export class ItemListComponent {
  text: string;
  emptyList: boolean = false;

  constructor(
    public data: DataProvider,
    public modalCtrl: ModalController
  ) {
    console.log('Hello ItemListComponent Component');
    this.text = 'Hello World';
  }
  onAddToBasket(item: any, index: number) {
    item.isInBasket = true;
    this.data.updateData(item, index);
    this.calculateItemsInBasket();
  }
  onDeleteItem(key: number) {
    this.data.deleteData(key);
  }
  calculateItemsInBasket() {
    let itemsList = this.data.items;
    
    let list = itemsList.filter((item) => {
      return item.isInBasket == false;
    });

    if (list.length == 0) {
      let profileModal = this.modalCtrl.create(AllInBasketComponent, { userId: 8675309 });
      profileModal.present();
    }
  }
}
