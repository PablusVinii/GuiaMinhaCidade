import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MelhoresrestaurantesProvider } from './../../providers/melhoresrestaurantes/melhoresrestaurantes';
import { Observable } from 'rxjs/Observable';
import { DetalhesPage } from '../detalhes/detalhes';

/**
 * Generated class for the MelhoresrestaurantesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-melhoresrestaurantes',
  templateUrl: 'melhoresrestaurantes.html',
})
export class MelhoresrestaurantesPage {

  restaurantes: Observable<any>;
  page: any;


  constructor(
    public navCtrl: NavController,
    private provider: MelhoresrestaurantesProvider,
    public navParams: NavParams){

    this.restaurantes = this.provider.getAll();

  }
  abrirDetalhes($event, restaurante) {
    this.navCtrl.push(DetalhesPage, {local:restaurante});
  }

}
