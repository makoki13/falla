import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { CalendarioPage, ChatPage, FotosPage, GeoPage, HomePage, TabsPage, UsuarioPage, AdminPage } from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    CalendarioPage, ChatPage, FotosPage, GeoPage, HomePage, TabsPage, UsuarioPage, AdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarioPage, ChatPage, FotosPage, GeoPage, HomePage, TabsPage, UsuarioPage, AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
