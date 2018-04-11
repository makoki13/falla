import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { CalendarioPage, ChatPage, FotosPage, GeoPage, HomePage } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any = HomePage;
  tab2: any = CalendarioPage;
  tab3: any = ChatPage;
  tab4: any = FotosPage;
  tab5: any = GeoPage;

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
