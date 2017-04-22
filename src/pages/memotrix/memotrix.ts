import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Memotrix page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-memotrix',
  templateUrl: 'memotrix.html'
})
export class MemotrixPage {

  public colores : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inicializarColores();
  }

  colorSeleccionado(color : Number){
    //alert("Numero seleccionado: " + color);
  }

  inicializarColores(){
    this.colores = [
      {
        nombre:"rojo"
    },
    {
      nombre:"verde"
    },
    {
      nombre:"azul"
    },
    {
      nombre:"amarillo"
    },
    {
      nombre:"rosa"
    },
    {
      nombre:"violeta"
    }
    ];
  }

}
