import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlphabetPage } from '../alphabet/alphabet';
import { VocabularyPage } from '../vocabulary/vocabulary';
import { CommunicationPage } from '../communication/communication';
import { GamePage } from '../game/game';
import { GrammarPage } from '../grammar/grammar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAlphabet() {
    this.navCtrl.push(AlphabetPage);
  }

  onVocabulary() {
    this.navCtrl.push(VocabularyPage);
  }

  onCommunication() {
    this.navCtrl.push(CommunicationPage);
  }

  onGame() {
    this.navCtrl.push(GamePage);
  }

  onGrammar() {
    this.navCtrl.push(GrammarPage);
  }
}
