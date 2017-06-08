import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the GameSettingsModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game-settings-modal',
  templateUrl: 'game-settings-modal.html',
})
export class GameSettingsModalPage {

  arrWords: string[] = [];
  timeCountdown: string = '3';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    
  }

  ionViewDidLoad() {
  }

  onDismiss() {
    let data = {
      words: this.arrWords,
      time: this.timeCountdown
    };
    this.viewCtrl.dismiss(data);
  }

  updateArrayCharacters(character: string, event: any) {
    if(event.checked) {
      this.arrWords.push(character);
    }
    else {
      let index = this.arrWords.indexOf(character);
      this.arrWords.splice(index, 1);
    }
  }

}
