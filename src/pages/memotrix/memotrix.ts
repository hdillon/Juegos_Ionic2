import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-memotrix',
  templateUrl: 'memotrix.html'
})
export class MemotrixPage {

  public colores : any;
  public secuenciaAleatoria : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inicializarColores();
  }

    /*document.getElementById("color-1").click();
    document.getElementById("color-2").click();
    document.getElementById("color-3").click();*/

  colorSeleccionado(indiceColor : number){
    var auxEstilo =  this.colores[indiceColor].estilo;
    this.colores[indiceColor].estilo = "estilo-default";

  setTimeout(() =>{
    this.colores[indiceColor].estilo = auxEstilo;
    }, 500);
//Con la sintaxis de ES5 "function()" No puedo acceder al valor de colores!.. con la sintaxis de ES6 "()=>" si funciona!
   /* setTimeout(function() {
      console.info("Colores: " + this.colores);
    this.colores[indiceColor].estilo = "cell-0";
  }, 1000);*/ 
  
  }

  inicializarColores(){
    this.colores = [
      {
        nombre:"rojo",
        estilo: "estilo-rojo"
    },
    {
      nombre:"verde",
      estilo: "estilo-verde"
    },
    {
      nombre:"azul",
      estilo: "estilo-azul"
    },
    {
      nombre:"amarillo",
      estilo: "estilo-amarillo"
    },
    {
      nombre:"rosa",
      estilo: "estilo-rosa"
    },
    {
      nombre:"violeta",
      estilo: "estilo-violeta"
    }
    ];
  }

}
