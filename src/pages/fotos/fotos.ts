import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SubirPage } from '../subir/subir';

//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';

import { CargaArchivoProvider } from '../../providers/carga-archivo/carga-archivo';


@Component({
  selector: 'page-fotos',
  templateUrl: 'fotos.html'
})
export class FotosPage {
  //posts: Observable<any[]>;
  hayMas: boolean = true;

  constructor(private modalCtrl: ModalController, private _cap: CargaArchivoProvider) {
    //this.posts = afDB.list('post').valueChanges();
  }

  mostrar_modal() {
    let modal = this.modalCtrl.create ( SubirPage );
    modal.present();
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
  
    this._cap.cargar_imagenes().then(
      ( hayMas: boolean ) => {
        console.log ( hayMas );
        this.hayMas = hayMas;
        infiniteScroll.complete()
      }
    )    
  }

}

