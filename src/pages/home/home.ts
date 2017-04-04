import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: any;
  constructor(public navCtrl: NavController, public authData: AuthData, public alertCtrl: AlertController, 
              public loadingCtrl: LoadingController) {
    
  }

  logoutUser(){
        this.authData.logoutUser().then( authData => {
            this.navCtrl.setRoot(LoginPage);
        }, error => {
          this.loading.dismiss().then( () => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{
                text: "Ok",
                role: 'cancel'
              }]
            });
          alert.present();
          });
        });
        this.loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
        });
        this.loading.present(); 
  }

}
