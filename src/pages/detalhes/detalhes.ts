import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  local:any;

  constructor(private callNumber: CallNumber, public navCtrl: NavController, public navParams: NavParams) {
    this.local = this.navParams.get('local');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }
  
  ligar(tel) {
    this.callNumber.callNumber(tel, true);
}

  

}
