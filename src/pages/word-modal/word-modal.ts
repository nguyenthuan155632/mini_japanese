import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the WordModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-word-modal',
  templateUrl: 'word-modal.html',
})
export class WordModalPage {

  word: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.word = this.navParams.get('data');
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

}
