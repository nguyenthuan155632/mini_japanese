import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Settings } from './../../config/settings';
import { NativeAudio } from '@ionic-native/native-audio';

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
  objectWords: object[] = [];
  japanese_char: string = '';
  japanese_obj: any;
  indexWord: number = 0;
  intervalGame: any;
  wordCounter: number;
  randomWords: string[] = [];
  randomWords2: string[] = [];
  winWordCounter: number = 0;
  isClickedButton: boolean = false;
  right: string;
  wrong: string;
  isEnded: boolean = false;
  result: any;
  timeCountdown: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public loadingCtrl: LoadingController,
              private nativeAudio: NativeAudio) {

    this.onStartGaming(3);

    this.timeCountdown = parseInt(navParams.get('timeCountdown'));

    if(navParams.get('gameSettings').length == 0) {
      this.words = Settings.ALPHABET_MAP["all"];
    } else {
      this.words = navParams.get('gameSettings');
    }

    for(let w of this.words) {
      this.arrWords = this.arrWords.concat(Settings.ALPHABET_MAP[w]["arr"]);
    } 

    this.arrWords = this.shuffle(this.arrWords);

    for(let aW of this.arrWords) {
      let obj: any = {};
      obj[aW] = Settings.HARAGANA_ALPHABET_MAP_DICTIONARY[aW];
      this.objectWords.push(obj);
    }

    this.wordCounter = this.objectWords.length;

    this.nativeAudio.preloadSimple('rightAnswer', 'assets/audio/right.mp3');
    this.nativeAudio.preloadSimple('wrongAnswer', 'assets/audio/wrong.mp3');

  }

  ionViewDidLoad() {
  }

  onPass(r: string) {
    this.isClickedButton = true;
    if(r == this.japanese_obj) {
      this.nativeAudio.play('rightAnswer');
      this.winWordCounter++;
      this.right = r;
    } else {
      this.nativeAudio.play('wrongAnswer');
      this.wrong = r;
    }
  }

  onStartGaming(timer: number) {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: this.loadingContent(timer.toString())
    });
    loading.present();
    let t = setInterval(() => {
      timer--;
      if(timer == 0) {
        loading.data.content = this.loadingContent('Start', true);
        clearInterval(t);
        setTimeout(() => {
          loading.dismiss();
          this.onPlayGame();
          this.time_countdown = this.timeCountdown;
          let index = this.objectWords[this.indexWord];
          this.japanese_char = index[Object.keys(index)[0]];
          this.japanese_obj = Object.keys(index)[0];
          this.getRandomWords(this.japanese_obj);
        }, 500);
      } else {
        loading.data.content = this.loadingContent(timer.toString());
      }
    }, 1000);
  }

  onPlayGame(timer: number = this.timeCountdown) {
    timer++;
    this.intervalGame = setInterval(() => {
      timer--;
      this.time_countdown = timer;
      if(timer == 0) {
        clearInterval(this.intervalGame);
        setTimeout(() => {
          this.switchWord();
        }, 1000);
        this.onPlayGame();
      }
    }, 1000);
  }

  switchWord() {
    this.indexWord++;
    if(this.indexWord >= this.wordCounter) {
      clearInterval(this.intervalGame);
      this.result = (this.winWordCounter / this.objectWords.length * 100).toFixed(0);
      this.isEnded = true;
    } else {
      let index = this.objectWords[this.indexWord];
      this.japanese_char = index[Object.keys(index)[0]];
      this.japanese_obj = Object.keys(index)[0];
      this.getRandomWords(this.japanese_obj);
    }
  }

  loadingContent(timer: string, start: boolean = false) {
    let fontSize = '';
    let startClass = 'not-start-gaming';
    if(start) {
      fontSize = 'font-change';
      startClass = 'start-gaming';
    }
    let content = `
        <div class="custom-spinner-wrapper ${fontSize} ${startClass}">
          <div class="custom-spinner-box">${timer}</div>
        </div>
      `;
    return content;
  }

  onClose() {
    this.navCtrl.pop();
  }

  getRandomWords(answer: string) {
    this.right = '';
    this.wrong = '';
    this.isClickedButton = false;

    this.randomWords = this.getRandom(Settings.ALPHABET_ARRAY, 5, answer);
    this.randomWords.push(answer);
    this.randomWords = this.shuffle(this.randomWords);
    this.randomWords2 = this.randomWords.splice(0, 3);
  }
  

  // extend(obj, src) {
  //   for (let key in src) {
  //     if (src.hasOwnProperty(key)) obj[key] = src[key];
  //   }
  //   return obj;
  // }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  getRandom(arr, count, n) {
    let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
	  let result = shuffled.slice(min);
    if(result.includes(n)) { 
      result = this.getRandom(arr, count, n); 
    } 
    return result;
  }

}
