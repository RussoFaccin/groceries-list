export class GroceryItem {
  name: string;
  qtd: number;
  isInBasket: boolean;
  constructor(name: string, qtd: number){
    this.name = name;
    this.qtd = qtd;
    this.isInBasket = false;
  }
}
