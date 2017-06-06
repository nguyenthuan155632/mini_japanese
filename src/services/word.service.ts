import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class WordService {
    private words: FirebaseListObservable<any>;
    loading: any;

    constructor(public af: AngularFireDatabase, public loadingCtrl: LoadingController) {

    }

    addWord(slug: string, date: string, english: string, japanese: string, romaji: string, vietnamese: string) {
        // this.words.push(new WordModel(slug, date, english, japanese, romaji, vietnamese));
    }

    getWords() {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Please wait...'
        });
        this.loading.present();
        
        this.words = this.af.list('/words');
        
        setTimeout(() => {
            this.loading.dismiss();
        }, 1500);
        
        return this.words;
    }
}