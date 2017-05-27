import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-paises',
  templateUrl: 'paises.html'
})
export class PaisesPage {
  listaPaises: any;
  listaVisible: boolean = true;
  mapaVisible: boolean = false;


constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private googleMaps: GoogleMaps) {
    this.listaPaises =  this.http.get('https://restcountries.eu/rest/v1/all').map(res => res.json());
    console.info(this.listaPaises);
  }

// Load map only after view is initialized
  ngAfterViewInit() {
    this.loadMap();
  }

  verMapaPais(pais){
    this.listaVisible = false;
    this.mapaVisible = true;
    this.loadMap();
  }


  loadMap() {
    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);
    map.one(GoogleMapsEvent.MAP_READY).then(
      () => {
        console.log('Map is ready!');
      }
    );
  }

}
