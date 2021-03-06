import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { EmailValidator } from '../../validators/email';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  loginForm: any;
  loading: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthData,
  public formBuilder: FormBuilder, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

    this.loginForm = formBuilder.group({
    email: ['', Validators.compose([Validators.required, 
        EmailValidator.isValid])],
    password: ['', Validators.compose([Validators.minLength(6), 
    Validators.required])]
    });
  }

  goToResetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }

  createAccount(){
    this.navCtrl.push(SignupPage);
  }

  loginUser(){
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
        this.authData.loginUser(this.loginForm.value.email, 
          this.loginForm.value.password).then( authData => {
            this.navCtrl.setRoot(HomePage);
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
