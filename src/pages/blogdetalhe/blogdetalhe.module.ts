import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogdetalhePage } from './blogdetalhe';

@NgModule({
  declarations: [
    BlogdetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(BlogdetalhePage),
  ],
})
export class BlogdetalhePageModule {}
