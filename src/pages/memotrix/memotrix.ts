import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';

@Component({
  selector: 'page-memotrix',
  templateUrl: 'memotrix.html'
})
export class MemotrixPage {

  public colores : any;
  public secuenciaAleatoria : Array<number> = [];
  public secuenciaUsuario : Array<number> = [];
  public usuarioLogueado : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthData) {
    this.usuarioLogueado = this.auth.fireAuth;
    this.usuarioLogueado.puntos = 0;
    this.inicializarColores();
    this.reproducirSecuendiaAleatoria();
  }

  colorSeleccionadoUsuario(indiceColor : number){
    this.secuenciaUsuario.push(indiceColor);
    this.presionarColor(indiceColor);
    if(this.secuenciaUsuario.toString() == this.secuenciaAleatoria.slice(0, this.secuenciaUsuario.length).toString()){
      console.info("ALEATORIA: " + this.secuenciaAleatoria.length);
      console.info("USUARIO: " + this.secuenciaUsuario.length);
      if(this.secuenciaUsuario.length == this.secuenciaAleatoria.length){
        console.info("SECUENCIA CORRECTA!");
        this.usuarioLogueado.puntos += 10;
        this.secuenciaUsuario = [];
        this.reproducirSecuendiaAleatoria();
      }
    }else{ 
      setTimeout(() =>{
        console.info("INCORRECTA!");
        alert("Perdiste!");
        this.secuenciaUsuario = [];
        this.secuenciaAleatoria = [];
        alert("Comenzar nuevamente..");
        this.reproducirSecuendiaAleatoria();
      }, 350);
    }
  }

  reproducirSecuendiaAleatoria(){
    var indiceColorAgregado = Math.floor(Math.random()*4);
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
      }
    ];
  }

}
