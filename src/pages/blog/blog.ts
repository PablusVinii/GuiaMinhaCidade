import { BlogdetalhePage } from './../blogdetalhe/blogdetalhe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogProvider } from './../../providers/blog/blog';

import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
  posts: Observable<any>;
  post: any;

  constructor(private provider: BlogProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.posts = this.provider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

  chamarlugares(event, post) {
    this.navCtrl.push(BlogdetalhePage, {post:post});
  }

}
