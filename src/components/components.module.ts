import { NgModule } from '@angular/core';
import { AddNewDialogComponent } from './add-new-dialog/add-new-dialog';
import { ItemListComponent } from './item-list/item-list';
@NgModule({
	declarations: [AddNewDialogComponent,
    ItemListComponent],
	imports: [],
	exports: [AddNewDialogComponent,
    ItemListComponent]
})
export class ComponentsModule {}
