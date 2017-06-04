import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WordService } from './../../services/word.service';
import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the CommunicationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-communication',
  templateUrl: 'communication.html',
})
export class CommunicationPage {

  words: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private wordService: WordService) {

    this.words = wordService.getWords();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunicationPage');
  }

}
