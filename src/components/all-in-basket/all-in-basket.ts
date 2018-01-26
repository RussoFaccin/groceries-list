import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello AllInBasketComponent Component');
    this.text = 'Hello World';
  }

}
