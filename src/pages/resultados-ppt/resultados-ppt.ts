import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioDatos } from '../../providers/servicio-datos';
import { AuthData } from '../../providers/auth-data';

@Component({
  selector: 'page-resultados-ppt',
  templateUrl: 'resultados-ppt.html'
})
export class ResultadosPPTPage {

  usuarioLogueado: any;
  lista:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio: ServicioDatos, public auth: AuthData) {
    // this.usuarioLogueado = this.auth.fireAuth;
    this.lista = this.servicio.traerDatosFiltrados("/PiedraPapelTijera", "usuario", this.navParams.get("usuario"));
  }
}
