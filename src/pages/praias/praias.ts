import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PraiasProvider } from './../../providers/praias/praias';
import { Observable } from 'rxjs/Observable';
import { DetalhesPage } from '../detalhes/detalhes';

@IonicPage()
@Component({
  selector: 'page-praias',
  templateUrl: 'praias.html',
})
export class PraiasPage {

  locais: Observable<any>;
  page: any;
  local: any;


  constructor(
    public navCtrl: NavController,
    private provider: PraiasProvider){

    this.locais = this.provider.getAll();

  }
  abrirDetalhes($event, local) {
    this.navCtrl.push(DetalhesPage, {local:local});
  }

}
