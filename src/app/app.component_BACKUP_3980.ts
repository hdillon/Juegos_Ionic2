import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
<<<<<<< HEAD
import { PiedrapapeltijeraPage } from '../pages/piedrapapeltijera/piedrapapeltijera';
=======
import { ListadoPuntajesPage } from '../pages/listado-puntajes/listado-puntajes';
import { MemotrixPage } from '../pages/memotrix/memotrix';
>>>>>>> branch-memotrix
import { AngularFire } from 'angularfire2';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public af: AngularFire) {
    this.initializeApp();

    const authObserver = af.auth.subscribe( user => {
      if (user) {
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      } else {
        this.rootPage = LoginPage;
        authObserver.unsubscribe();
      }
    });

    this.pages = [
      { title: 'Home', component: HomePage },
<<<<<<< HEAD
      { title: 'Tareas', component: Page2 },
      { title: 'Piedra-Papel-Tijera', component: PiedrapapeltijeraPage }
=======
      /*{ title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 },*/
      { title: 'Memotrix', component: MemotrixPage },
      { title: 'Puntajes', component: ListadoPuntajesPage }
>>>>>>> branch-memotrix
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
