import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { LugaresProvider } from './../../providers/lugares/lugares';
import { Observable } from 'rxjs/Observable';
import { DetalhesPage } from '../detalhes/detalhes';

/**
 * Generated class for the LugaresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugares',
  templateUrl: 'lugares.html',
})
export class LugaresPage {

  locais: Observable<any>;
  page: any;
  local: any;


  constructor(
    public navCtrl: NavController,
    private provider: LugaresProvider){


   this.locais = this.provider.getAll();

  }
  abrirDetalhes($event, local) {
    this.navCtrl.push(DetalhesPage, {local:local});
  }

}

