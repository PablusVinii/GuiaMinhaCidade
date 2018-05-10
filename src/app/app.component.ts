import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../pages/models/profile';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { BlogPage } from '../pages/blog/blog';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  profileData: Observable<Profile>
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();
    

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Melhores Lugares', component: HomePage },
      { title: 'Inspire-se...', component: BlogPage },
      { title: 'Bancos e Serviços Financeiros', component: HomePage },
      { title: 'Bares, Baladas e Vida Noturna', component: HomePage },
      { title: 'Cabeleiros e Estética', component: HomePage },
      { title: 'Cafés e Comidinhas', component: HomePage },
      { title: 'Carros e Serviços Automotivos', component: HomePage },
      { title: 'Casa, Construção e Serviços Residenciais', component: HomePage },
      { title: 'Escolas', component: HomePage },
      { title: 'Esporte e Academias', component: HomePage },
      { title: 'Farmácias, Médicos e Hospitais', component: HomePage },
      { title: 'Hotéis e Viagens', component: HomePage },
      { title: 'Lojas e Compras', component: HomePage },
      { title: 'Pets e Animais de Estimação', component: HomePage },
      { title: 'Prédios e Escritórios', component: HomePage },
      { title: 'Profissionais Liberais', component: HomePage },
      { title: 'Restaurantes', component: HomePage },
      { title: 'Serviços para Festas e Eventos', component: HomePage },
      { title: 'Serviços Públicos', component: HomePage },
      { title: 'Supermercados, Mercados e Conveniências', component: HomePage },
      { title: 'Transporte, Gasolina e Estacionamentos', component: HomePage },
      { title: 'Quem Somos', component: HomePage }

    ];

    
        
          

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.afAuth.authState.subscribe(data => {
        if (data && data.email && data.uid) {
          this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
    
          
        }
        else {
          this.toast.create({
            message: `Could not find authentication details.`,
            duration: 3000
          }).present();
        }
      });
      
      
        })
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  
}

        

      
