import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PiedrapapeltijeraPage } from '../pages/piedrapapeltijera/piedrapapeltijera';
import { ResultadosPPTPage } from '../pages/resultados-ppt/resultados-ppt';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
// Importing Providers
import { AuthData } from '../providers/auth-data';
import { ServicioDatos } from '../providers/servicio-datos';
// Importing AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
// AF2 Settings
const firebaseConfig = {
  apiKey: "AIzaSyCmwrmiO9sATY1sMAqgwuhpCXd5igb2W9Y",
  authDomain: "juegosionic2.firebaseapp.com",
  databaseURL: "https://juegosionic2.firebaseio.com",
  projectId: "juegosionic2",
  storageBucket: "juegosionic2.appspot.com",
  messagingSenderId: "85931233654"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    HomePage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    PiedrapapeltijeraPage,
    ResultadosPPTPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    HomePage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    PiedrapapeltijeraPage,
    ResultadosPPTPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData,
    ServicioDatos
  ]
})
export class AppModule {}
