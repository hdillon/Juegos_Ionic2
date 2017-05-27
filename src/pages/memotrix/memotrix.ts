import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { ServicioDatos } from '../../providers/servicio-datos';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-memotrix',
  templateUrl: 'memotrix.html'
})
export class MemotrixPage {

  resultadoJuego: any = {
    usuario: "",
    puntaje: "",
    fecha: ""
  }
  public colores : any;
  public secuenciaAleatoria : Array<number> = [];
  public secuenciaUsuario : Array<number> = [];
  public usuarioLogueado : any;
  maquina:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthData, public servicioDatos: ServicioDatos,
  public alertCtrl: AlertController) {
    this.usuarioLogueado = this.auth.fireAuth;
    console.info("usuario logueado" + this.usuarioLogueado);
    //TODO: Validar si el usuario está logueado y redirigir a la página de login en caso de que no lo esté
    this.usuarioLogueado.puntos = 0;
    this.inicializarColores();
    this.reproducirSecuendiaAleatoria();
  }

  colorSeleccionadoUsuario(indiceColor : number){
    if (this.maquina == false)
    {
      this.secuenciaUsuario.push(indiceColor);
      this.presionarColor(indiceColor);
      if(this.secuenciaUsuario.toString() == this.secuenciaAleatoria.slice(0, this.secuenciaUsuario.length).toString()){
        /*console.info("ALEATORIA: " + this.secuenciaAleatoria.length);
        console.info("USUARIO: " + this.secuenciaUsuario.length);*/
        if(this.secuenciaUsuario.length == this.secuenciaAleatoria.length){
          console.info("SECUENCIA CORRECTA!");
          this.usuarioLogueado.puntos += 10;
          this.secuenciaUsuario = [];
          this.reproducirSecuendiaAleatoria();
        }
      }else{ 
        setTimeout(() =>{
          console.info("INCORRECTA!");
          this.resultadoJuego.usuario = this.usuarioLogueado.email;
          this.resultadoJuego.puntaje = this.usuarioLogueado.puntos;
          this.resultadoJuego.fecha = new Date();
          this.servicioDatos.guardarDatos("/memotrix/resultados", this.resultadoJuego);
          this.secuenciaUsuario = [];
          this.secuenciaAleatoria = [];
          this.usuarioLogueado.puntos = 0;
  
           let confirm = this.alertCtrl.create({
            title: 'Incorrecto!',
            message: 'Has logrado ' + this.resultadoJuego.puntaje + ' puntos! ¿Deseas volver a jugar?',
            buttons: [
              {
                text: 'Si',
                handler: () => {
                  this.reproducirSecuendiaAleatoria();
                }
              },
              {
                text: 'Ahora no',
                handler: () => {
                  this.navCtrl.setRoot(HomePage);
                }
              }
            ]
          });
          confirm.present();
          
        }, 350);
      }
    }
  }

  reproducirSecuendiaAleatoria(){
    this.maquina = true;
    var indiceColorAgregado = Math.floor(Math.random()*4);
    this.secuenciaAleatoria.push(indiceColorAgregado);
    var i = 0;
    this.secuenciaAleatoria.forEach(element => {
      i++;
      setTimeout(() =>{
        this.presionarColor(element);
      }, 500 * i);
      if(this.secuenciaAleatoria.length == i){
        setTimeout(() =>{
          this.maquina = false;
      }, 500 * i);
      }    
    });
  }

  presionarColor(indiceColor : number){
    var auxColorNombre =  this.colores[indiceColor].nombre;
    this.colores[indiceColor].opacity = 1;
    //this.colores[indiceColor].bloqueado = true;
    setTimeout(() =>{
      this.colores[indiceColor].opacity = 0.6;
      //this.colores[indiceColor].bloqueado = false;
      }, 300);
  }

  bloquearBotones(bloquear : boolean){
    this.colores.forEach(element => {
      element.bloqueado = bloquear;
    });
  }


  inicializarColores(){
    this.colores = [
      {
        nombre:"rojo",
        estilo: "estilo-rojo",
        bloqueado: false,
        opacity: 0.6,
        border: "5px",
        borderStyle: "solid",
        borderColor: "#B71C1C",
        borderRadius: "10%"
      },
      {
        nombre:"verde",
        estilo: "estilo-verde",
        bloqueado: false,
        opacity: 0.6,
        border: "5px",
        borderStyle: "solid",
        borderColor: "#1B5E20",
        borderRadius: "10%"
      },
      {
        nombre:"azul",
        estilo: "estilo-azul",
        bloqueado: false,
        opacity: 0.6,
        border: "5px",
        borderStyle: "solid",
        borderColor: "#0D47A1",
        borderRadius: "10%"
      },
      {
        nombre:"amarillo",
        estilo: "estilo-amarillo",
        bloqueado: false,
        opacity: 0.6,
        border: "5px",
        borderStyle: "solid",
        borderColor: "#FFD600",
        borderRadius: "10%"
      }
    ];
  }

}
