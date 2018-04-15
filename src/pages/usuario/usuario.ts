import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { TabsPage} from '../index.paginas';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  @ViewChild('user') user;

  private usuarioValido = false;

  private imagenInicial = 'alert';

  imgUser: string = this.imagenInicial;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    setTimeout(()=>{
      this.user.setFocus();
    },200);
  }

  controlNameKeypress(event) {
    const caracter = event.keyCode;
    if (caracter === 13) {
      
    }
  }

  testUsuario() {
    if (this.user.value.length < 3) {
      this.imgUser = this.imagenInicial;
      this.usuarioValido = false;
    } else {
      this.imgUser = 'checkmark';
      this.usuarioValido = true;
    }
    this.verificaFormulario();
  }

  private verificaFormulario() {
    return this.usuarioValido;
  }

  registra() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: '¡Correcto!',
        subTitle: 'Gracias por entrar.',
        buttons: [{text: 'OK', handler:() => {this.irAlinicio();}}]
      });
      alert.present();
    });

    loading.present();
  }

  irAlinicio() {
    this.storage.set('usuario',this.user.value);
    this.navCtrl.push( TabsPage );
  }

}
