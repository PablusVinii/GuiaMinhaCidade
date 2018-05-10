import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { RestaurantesromanticosProvider } from './../../providers/restaurantesromanticos/restaurantesromanticos';
import { Observable } from 'rxjs/Observable';
import { DetalhesPage } from '../detalhes/detalhes';
/**
 * Generated class for the RestaurantesromanticosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurantesromanticos',
  templateUrl: 'restaurantesromanticos.html',
})
export class RestaurantesromanticosPage {

  locais: Observable<any>;
  page: any;
  local: any;


  constructor(
    public navCtrl: NavController,
    private provider: RestaurantesromanticosProvider){

    this.locais = this.provider.getAll();

  }
  abrirDetalhes($event, local) {
    this.navCtrl.push(DetalhesPage, {local:local});
  }

}
