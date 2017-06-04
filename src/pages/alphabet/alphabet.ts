import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlphabetHiraganaPage } from '../../pages/alphabet-hiragana/alphabet-hiragana';
import { AlphabetKatakanaPage } from '../../pages/alphabet-katakana/alphabet-katakana';

/**
 * Generated class for the AlphabetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alphabet',
  templateUrl: 'alphabet.html',
})
export class AlphabetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlphabetPage');
  }

  onHiragana() {
    this.navCtrl.push(AlphabetHiraganaPage);
  }

  onKatakana() {
    this.navCtrl.push(AlphabetKatakanaPage);
  }

}
