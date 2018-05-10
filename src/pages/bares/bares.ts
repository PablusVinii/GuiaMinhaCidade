import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BaresProvider } from './../../providers/bares/bares';
import { Observable } from 'rxjs/Observable';
import { DetalhesPage } from '../detalhes/detalhes';

@IonicPage()
@Component({
  selector: 'page-bares',
  templateUrl: 'bares.html',
})
export class BaresPage {

  locais: Observable<any>;
  page: any;
  local: any;


  constructor(
    public navCtrl: NavController,
    private provider: BaresProvider){

    this.locais = this.provider.getAll();

  }
  abrirDetalhes($event, local) {
    this.navCtrl.push(DetalhesPage, {local:local});
  }

}
