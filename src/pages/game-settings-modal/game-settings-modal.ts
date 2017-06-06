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

  arrCharacters: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    
  }

  ionViewDidLoad() {
  }

  onDismiss() {
    let data = this.arrCharacters;
    this.viewCtrl.dismiss(data);
  }

  updateArrayCharacters(character: string, isChecked: any) {
    if(isChecked.checked) {
      this.arrCharacters.push(character);
    }
    else {
      let index = this.arrCharacters.indexOf(character);
      this.arrCharacters.splice(index, 1);
    }
  }

}
