import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Settings } from './../../config/settings';

/**
 * Generated class for the GameHaraganaRomajiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game-haragana-romaji',
  templateUrl: 'game-haragana-romaji.html',
})
export class GameHaraganaRomajiPage {

  words: string[] = [];
  arrWords: string[] = [];
  time_countdown: number;
  objectWords: object = {};
  inputWord: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.time_countdown = Settings.TIME_COUNTDOWN;
    this.words = ["a", "ka", "sa"];

    // this.words = this.shuffle(this.words);
    // console.log(this.words);
    // this.words = navParams.get('gameSettings');

    for(let w of this.words) {
      this.arrWords = this.arrWords.concat(Settings.HARAGANA_ALPHABET_MAP[w]["arr"]);
    } 

    this.arrWords = this.shuffle(this.arrWords);

    for(let aW of this.arrWords) {
      this.objectWords = this.extend(this.objectWords, Settings.HARAGANA_ALPHABET_MAP_DICTIONARY[aW]);
    } 

    console.log(this.objectWords);

  }

  ionViewDidLoad() {
  }

  onPass() {
    console.log(this.inputWord);
    this.inputWord = '';
  }

  private extend(obj, src) {
    for (let key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
  }

  private shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

}
