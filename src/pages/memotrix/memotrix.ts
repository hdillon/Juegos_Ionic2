import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-memotrix',
  templateUrl: 'memotrix.html'
})
export class MemotrixPage {

  public colores : any;
  public secuenciaAleatoria : Array<number> = [1, 2, 3, 3, 4];
  public secuenciaUsuario : Array<number> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inicializarColores();
    this.reproducirSecuendiaAleatoria();
  }

  colorSeleccionadoUsuario(indiceColor : number){
    this.secuenciaUsuario.push(indiceColor);
    this.presionarColor(indiceColor);
    if(this.secuenciaUsuario.toString() == this.secuenciaAleatoria.slice(0, this.secuenciaUsuario.length).toString()){
      console.info("SECUENCIA CORRECTA!");
    }else{ 
      console.info("INCORRECTA!");
      alert("Perdiste!");
    }
  }

  reproducirSecuendiaAleatoria(){
    var indiceColorAgregado = Math.floor(Math.random()*6)+1;
    this.secuenciaAleatoria.push(indiceColorAgregado);
    var i = 0;
    this.secuenciaAleatoria.forEach(element => {
      i++;
      setTimeout(() =>{
        this.presionarColor(element);
      }, 500 * i);
    });
  }

  presionarColor(indiceColor : number){
    var auxColorNombre =  this.colores[indiceColor].nombre;
    this.colores[indiceColor].nombre = "danger";
    this.colores[indiceColor].bloqueado = true;
    setTimeout(() =>{
      this.colores[indiceColor].nombre = auxColorNombre;
      this.colores[indiceColor].bloqueado = false;
      }, 300);
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
