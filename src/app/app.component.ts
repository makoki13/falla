import { AdminPage } from './../pages/admin/admin';
import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage, UsuarioPage }  from '../pages/index.paginas';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  usuario: any = UsuarioPage;
  admin: any = AdminPage;

  idUsuario: string;

  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.get('usuario').then((val) => {
        console.log('get usuario',val);        
        
        if (val === '') {
          this.rootPage = UsuarioPage;
        }
        else {
          this.idUsuario = val;
          this.rootPage = TabsPage;
        }        
      });

      statusBar.styleDefault();
      splashScreen.hide();      
    });
  }

  abrirPagina( pagina: any ) {
    this.rootPage = pagina;
    this.menuCtrl.close();
    console.log('menu close');
  }
}

