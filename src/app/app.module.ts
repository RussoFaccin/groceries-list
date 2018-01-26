import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
// Pages
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item';
//Components
import { AddNewDialogComponent } from '../components/add-new-dialog/add-new-dialog';
import { ItemListComponent } from '../components/item-list/item-list';
import { AllInBasketComponent } from '../components/all-in-basket/all-in-basket';
// Providers
import { DataProvider } from '../providers/data/data';
// Storage
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    AddNewDialogComponent,
    ItemListComponent,
    AllInBasketComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'grocery_db',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    AddNewDialogComponent,
    ItemListComponent,
    AllInBasketComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
