import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase  } from 'angularfire2';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})

export class Page2 {
  tareas: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public database: AngularFireDatabase
  ) {
    this.tareas = this.database.list('/tareas')
  }

  crearTarea(){
    let nuevaTareaModal = this.alertCtrl.create({
      title: 'Nueva Tarea',
      message: "Ingrese el título de la tarea",
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Título'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelar click');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            this.tareas.push({
              titulo: data.titulo,
              activo: false
            });
          }
        }
      ]
    });
    nuevaTareaModal.present( nuevaTareaModal );
  }

  modificarTarea( tarea ){
    setTimeout(()=>{
      this.tareas.update( tarea.$key,{
        titulo: tarea.titulo,
        activo: tarea.activo
      });
    },1);
  }

  eliminarTarea( tarea ){
    this.tareas.remove( tarea );
  }

}
