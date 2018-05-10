import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule }from 'angularfire2/auth'; 

import { MyApp } from './app.component';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { BlogdetalhePage } from '../pages/blogdetalhe/blogdetalhe';


import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeProvider } from '../providers/home/home';
import { PontadepedrasProvider } from '../providers/pontadepedras/pontadepedras';
import { CallNumber } from '@ionic-native/call-number';
import { BaresProvider } from '../providers/bares/bares';
import { RestaurantesromanticosProvider } from '../providers/restaurantesromanticos/restaurantesromanticos';
import { MelhoresrestaurantesProvider } from '../providers/melhoresrestaurantes/melhoresrestaurantes';
import { GastronomiaProvider } from '../providers/gastronomia/gastronomia';
import { LugaresProvider } from '../providers/lugares/lugares';
import { LoginPage } from '../pages/login/login';
import { PraiasProvider } from '../providers/praias/praias';
import { BlogProvider } from '../providers/blog/blog';
import { BlogPageModule } from '../pages/blog/blog.module';
import { HomePageModule } from '../pages/home/home.module';
import { Push } from '@ionic-native/push';


var config = {
    apiKey: "AIzaSyDTF6_3CMrdhfIDNs0-b7iPQP9qMf9dowI",
    authDomain: "guiaminhacidade-65b2b.firebaseapp.com",
    databaseURL: "https://guiaminhacidade-65b2b.firebaseio.com",
    projectId: "guiaminhacidade-65b2b",
    storageBucket: "guiaminhacidade-65b2b.appspot.com",
    messagingSenderId: "788806338595"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListPage,
    DetalhesPage,
    BlogdetalhePage,
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BlogPageModule,
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListPage,
    DetalhesPage,
    BlogdetalhePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeProvider,
    PontadepedrasProvider,
    CallNumber,
    BaresProvider,
    RestaurantesromanticosProvider,
    MelhoresrestaurantesProvider,
    GastronomiaProvider,
    LugaresProvider,
    PraiasProvider,
    BlogProvider,
    Push,
  ]
})
export class AppModule {}
