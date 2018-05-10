import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { GastronomiaProvider } from './../../providers/gastronomia/gastronomia';
import { Observable } from 'rxjs/Observable';
import { DetalhesPage } from '../detalhes/detalhes';

@IonicPage()
@Component({
  selector: 'page-gastronomia',
  templateUrl: 'gastronomia.html',
})
export class GastronomiaPage {

  locais: Observable<any>;
  page: any;
  local: any;


  constructor(
    public navCtrl: NavController,
    private provider: GastronomiaProvider){

    this.locais = this.provider.getAll();

  }
  abrirDetalhes($event, local) {
    this.navCtrl.push(DetalhesPage, {local:local});
  }

}
