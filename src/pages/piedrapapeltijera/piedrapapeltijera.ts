import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioDatos } from '../../providers/servicio-datos';
import { AuthData } from '../../providers/auth-data';
import { ResultadosPPTPage } from '../resultados-ppt/resultados-ppt';


@Component({
  selector: 'page-piedrapapeltijera',
  templateUrl: 'piedrapapeltijera.html'
})
export class PiedrapapeltijeraPage {

  numeroSecreto: number;
  resultado: string;
  usuarioLogueado: any;
  lista:any;

  juego: any = {
    usuario: "",
    jugadaUsuario: "",
    jugadaMaquina: "",
    resultado: "",
    fecha: "",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio: ServicioDatos, public auth: AuthData) {
    this.usuarioLogueado = this.auth.fireAuth;
  }

  ionViewDidLoad() {
  }

  Jugar(opcion)
  {
    this.numeroSecreto = Math.floor( Math.random()*3)+1;
    switch (opcion)
    {
      case 1:
          if (this.numeroSecreto == 1)
          {
            alert("Empate");
            this.resultado = "Empate";
          }
          else if (this.numeroSecreto == 2)
          {
            alert("Usted Pierde");
            this.resultado = "Maquina Gana";
          }
          else 
          {
            alert("Usted Gana");
            this.resultado = "Usuario Gana";
          } 
        break;
        case 2:
          if (this.numeroSecreto == 1)
          {
            alert("Usted Gana");
            this.resultado = "Usuario Gana";
          }
          else if (this.numeroSecreto == 2)
          {
            alert("Empate");
            this.resultado = "Empate";
          }
          else 
          {
            alert("Usted Pierde");
            this.resultado = "Maquina Gana";
          }
        break;
        case 3:
          if (this.numeroSecreto == 1)
          {
            alert("Usted Pierde");
            this.resultado = "Maquina Gana";
          }
          else if (this.numeroSecreto == 2)
          {
            alert("Usted Gana");
            this.resultado = "Usuario Gana";
          }
          else 
          {
            alert("Empate");
            this.resultado = "Empate";
          }
        break;
    }

    this.juego.usuario = this.usuarioLogueado.email;
    this.juego.jugadaMaquina = this.numeroSecreto;
    this.juego.jugadaUsuario = opcion;
    this.juego.resultado = this.resultado;
    this.juego.fecha = new Date();

    this.servicio.guardarDatos("/PiedraPapelTijera", this.juego);
  
  }

  Resultados()
  {
    this.navCtrl.push(ResultadosPPTPage, {
      usuario: this.usuarioLogueado.email,
    });
  }

}
