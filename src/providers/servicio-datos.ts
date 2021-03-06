import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase  } from 'angularfire2';
import firebase from 'firebase';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicioDatos {

  constructor(public http: Http, public database: AngularFireDatabase) {

  }

  traerDatosFiltrados(ruta: string, campo:string, valor: string): FirebaseListObservable<any> {
    return this.database.list(ruta, { query: {
        orderByChild: campo,
        equalTo: valor
        }
      });
  }

  traerDatosOrdenados(ruta: string, campo:string): FirebaseListObservable<any> {
    return this.database.list(ruta, { query: {
        orderByChild: campo
        }
      });
                                        
  }

  traerDatos(ruta: string): FirebaseListObservable<any> {
    return this.database.list(ruta);
  }

  guardarDatos(ruta: string, datos: any) {
    return this.database.list(ruta).push(datos);
  }

  borrarDatos(ruta: string, datos: any) {
    return this.database.list(ruta).remove(datos);
  }

}
