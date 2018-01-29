import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AllInBasketComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'all-in-basket',
  templateUrl: 'all-in-basket.html'
})
export class AllInBasketComponent {

  text: string;

  constructor(
    private data: DataProvider,
    public viewCtrl: ViewController
  ) {}
  dismiss() {
    this.data.items = null;
    this.data.deleteAll();
    this.viewCtrl.dismiss();
  }
}
