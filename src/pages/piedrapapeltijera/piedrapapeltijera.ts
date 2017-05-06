import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-piedrapapeltijera',
  templateUrl: 'piedrapapeltijera.html'
})
export class PiedrapapeltijeraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PiedrapapeltijeraPage');
  }

}
