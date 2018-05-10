import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

/*
  Generated class for the BlogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogProvider {

  private PATH = 'blog/posts';

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
