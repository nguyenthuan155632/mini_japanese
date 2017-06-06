import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GameHaraganaRomajiPage } from './../game-haragana-romaji/game-haragana-romaji';
import { GameSettingsModalPage } from './../game-settings-modal/game-settings-modal';

/**
 * Generated class for the GamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  onGameSettings(type: string) {
    let gameSettingsModal = this.modalCtrl.create(GameSettingsModalPage);
    gameSettingsModal.onDidDismiss(data => {
      if(type == 'ha-ro') {
        this.navCtrl.push(GameHaraganaRomajiPage, { gameSettings: data });
      }
      else {

      }
   });
    gameSettingsModal.present();
  }

}
