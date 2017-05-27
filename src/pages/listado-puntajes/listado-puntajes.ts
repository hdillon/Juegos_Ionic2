import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioDatos } from '../../providers/servicio-datos';

@Component({
  selector: 'page-listado-puntajes',
  templateUrl: 'listado-puntajes.html'
})
export class ListadoPuntajesPage {
  listaPuntajes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioDatos: ServicioDatos) {
    this.listaPuntajes = this.servicioDatos.traerDatosOrdenados("/memotrix/resultados", "puntaje");
  }

}
