import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { UsuarioPage, AdminPage} from '../index.paginas';

import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: any = UsuarioPage;
  idUsuario: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private storage: Storage) {
    this.storage.get('usuario').then((val) => {
      console.log('home.ts',val);        
        
      if ( (val === null) || (val === '')) {
        console.log('es null');
        this.idUsuario = '(desconocido)';
        this.userPagina();
      } else {
          console.log('NO es null');
          this.idUsuario = val;
      }       
    });
  }

  public userPagina( ) {
    this.navCtrl.push( UsuarioPage );
  }

  adminPagina( ) {
    this.navCtrl.push( AdminPage );
  }

  mostrarMenu() {
    console.log('menu toggle');
    this.menuCtrl.toggle();
  }

}
