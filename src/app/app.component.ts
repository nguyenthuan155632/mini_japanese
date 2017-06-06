import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Deploy } from '@ionic/cloud-angular';

import { HomePage } from '../pages/home/home';
import { CommunicationPage } from '../pages/communication/communication';
import { GameHaraganaRomajiPage } from '../pages/game-haragana-romaji/game-haragana-romaji';
import { GamePage } from '../pages/game/game';
// import { AlphabetPage } from '../pages/alphabet/alphabet';
// import { AlphabetHiraganaPage } from '../pages/alphabet-hiragana/alphabet-hiragana';
// import { AlphabetKatakanaPage } from '../pages/alphabet-katakana/alphabet-katakana';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = GamePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.show();
    });
  }
}

