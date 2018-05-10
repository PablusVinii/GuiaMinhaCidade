import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomeProvider } from './../../providers/home/home';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../models/profile';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profileData: Observable<Profile>

  homes: Observable<any>;
  page: any;

 
  constructor(
    private push: Push,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams, 
    private provider: HomeProvider){

    this.homes = this.provider.getAll();
    
    // to check if we have permission
this.push.hasPermission().then((res: any) => {

  if (res.isEnabled) {
    alert('Tem permissao');

    const options: PushOptions = {
      android: {
          sound: true,
          vibrate: true,
          clearBadge: true,
          icon: 'icon',
          clearNotifications: true,
      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {},
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
   };

   const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => {
      alert(notification.message);
    });

    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

    } else {
    alert('Nao tem permissao');
    }

});
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Bem Vindo ao Guia Minha Cidade, ${data.email}`,
          duration: 3000
        }).present();
        this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();

        
      }
      else {
        this.toast.create({
          message: `Could not find authentication details.`,
          duration: 3000
        }).present();
      }
    })
  }

  chamarlugares(event, home) {
    this.navCtrl.push(home.page);
  }
}