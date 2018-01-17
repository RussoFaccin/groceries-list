import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewDialogPage } from './add-new-dialog';

@NgModule({
  declarations: [
    AddNewDialogPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewDialogPage),
  ],
})
export class AddNewDialogPageModule {}
