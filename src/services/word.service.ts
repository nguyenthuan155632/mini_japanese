import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class WordService {
    private words: FirebaseListObservable<any>;

    constructor(public af: AngularFireDatabase) {

    }

    addWord(slug: string, date: string, english: string, japanese: string, romaji: string, vietnamese: string) {
        // this.words.push(new WordModel(slug, date, english, japanese, romaji, vietnamese));
    }

    getWords() {
        this.words = this.af.list('/words');
        return this.words;
    }
}