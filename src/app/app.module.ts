import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Plugins
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';

//Pipes
import { PipesModule } from '../pipes/pipes.module';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBw4d1hMJypGdapwRrleiJzKe6OlTtxHv4",
  authDomain: "gag-f0213.firebaseapp.com",
  databaseURL: "https://gag-f0213.firebaseio.com",
  projectId: "gag-f0213",
  storageBucket: "gag-f0213.appspot.com",
  messagingSenderId: "454122775587"
};

import { MyApp } from './app.component';

import { CalendarioPage, ChatPage, FotosPage, GeoPage, HomePage, TabsPage, UsuarioPage, AdminPage, SubirPage } from '../pages/index.paginas';
import { IonicStorageModule } from '@ionic/storage';
import { CargaArchivoProvider } from '../providers/carga-archivo/carga-archivo';

@NgModule({
  declarations: [
    MyApp,
    CalendarioPage, ChatPage, FotosPage, GeoPage, HomePage, TabsPage, UsuarioPage, AdminPage, SubirPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarioPage, ChatPage, FotosPage, GeoPage, HomePage, TabsPage, UsuarioPage, AdminPage, SubirPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Camera,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CargaArchivoProvider
  ]
})
export class AppModule {}
