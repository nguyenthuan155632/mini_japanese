import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { WordService } from './../../services/word.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { WordModalPage } from './../word-modal/word-modal';

/**
 * Generated class for the VocabularyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-vocabulary',
  templateUrl: 'vocabulary.html',
})
export class VocabularyPage {

  vocabularies: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public wordService: WordService, 
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController) {

    this.vocabularies = wordService.getWords('/vocabularies');

  }

  ionViewDidLoad() {
  }

  onVocabularyDetail(vocabulary: any) {
    let vocabularyModal = this.modalCtrl.create(WordModalPage, { data: vocabulary });
    vocabularyModal.present();
  }

}
