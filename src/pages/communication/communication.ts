import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { WordService } from './../../services/word.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { WordModalPage } from './../word-modal/word-modal';

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public wordService: WordService, 
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController) {

    this.words = wordService.getWords('/words');

  }

  ionViewDidLoad() {
  }

  onWordDetail(word: any) {
    let wordModal = this.modalCtrl.create(WordModalPage, { data: word });
    wordModal.present();
  }

}
