import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';

import { InputComponent } from './fields-components/input.component';
import { SelectComponent } from './fields-components/select.component';
import { RadioComponent } from './fields-components/radio.component';
import { CheckComponent } from './fields-components/check.component';

import { BuildFormsApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';

@NgModule({
  declarations: [
    BuildFormsApp,
    HomePage,
    ContactPage,
    InputComponent,
    SelectComponent,
    RadioComponent,
    CheckComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(BuildFormsApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BuildFormsApp,
    HomePage,
    ContactPage,
    InputComponent,
    SelectComponent,
    RadioComponent,
    CheckComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
