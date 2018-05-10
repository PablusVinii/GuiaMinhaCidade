import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class MelhoresrestaurantesProvider {

  private PATH = 'recomendacoes/melhoresrestaurantes/melhoresrestaurantes/';

  constructor(private db: AngularFireDatabase) {
    
  }
  getAll(){
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })
  }
}