import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-memotrix',
  templateUrl: 'memotrix.html'
})
export class MemotrixPage {

  public colores : any;
  public secuenciaAleatoria : Array<string> = ["naranja", "verde", "verde", "azul"];
  public secuenciaUsuario : Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inicializarColores();
    this.reproducirSecuendiaAleatoria();
  }

  colorSeleccionado(indiceColor : number){
    var auxNombre =  this.colores[indiceColor].nombre;
    this.colores[indiceColor].nombre = "danger";
    this.colores[indiceColor].bloqueado = true;

  setTimeout(() =>{
    console.info("TIME OUT!");
    this.colores[indiceColor].nombre = auxNombre;
    this.colores[indiceColor].bloqueado = false;
    }, 300);
  }

  reproducirSecuendiaAleatoria(){
    var indiceColorAgregado = Math.floor(Math.random()*6)+1;
    this.secuenciaAleatoria.push(this.colores[indiceColorAgregado].nombre);
    var i = 0;
    this.secuenciaAleatoria.forEach(element => {
      i++;
      setTimeout(() =>{
        document.getElementById(element).click();
      }, 500 * i);
    });
  }


  inicializarColores(){
    this.colores = [
      {
        nombre:"naranja",
        estilo: "estilo-naranja",
        bloqueado: false
    },
    {
      nombre:"verde",
      estilo: "estilo-verde",
      bloqueado: false
    },
    {
      nombre:"azul",
      estilo: "estilo-azul",
      bloqueado: false
    },
    {
      nombre:"amarillo",
      estilo: "estilo-amarillo",
      bloqueado: false
    },
    {
      nombre:"rosa",
      estilo: "estilo-rosa",
      bloqueado: false
    },
    {
      nombre:"violeta",
      estilo: "estilo-violeta",
      bloqueado: false
    }
    ];
  }

}
