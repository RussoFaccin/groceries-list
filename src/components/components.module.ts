import { NgModule } from '@angular/core';
import { AddNewDialogComponent } from './add-new-dialog/add-new-dialog';
import { ItemListComponent } from './item-list/item-list';
import { AllInBasketComponent } from './all-in-basket/all-in-basket';
@NgModule({
	declarations: [AddNewDialogComponent,
    ItemListComponent,
    AllInBasketComponent],
	imports: [],
	exports: [AddNewDialogComponent,
    ItemListComponent,
    AllInBasketComponent]
})
export class ComponentsModule {}
