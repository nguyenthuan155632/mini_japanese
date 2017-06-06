import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlphabetPage } from '../pages/alphabet/alphabet';
import { AlphabetHiraganaPage } from '../pages/alphabet-hiragana/alphabet-hiragana';
import { AlphabetKatakanaPage } from '../pages/alphabet-katakana/alphabet-katakana';
import { VocabularyPage } from '../pages/vocabulary/vocabulary';
import { CommunicationPage } from '../pages/communication/communication';
import { WordModalPage } from '../pages/word-modal/word-modal';
import { GameSettingsModalPage } from '../pages/game-settings-modal/game-settings-modal';
import { GamePage } from '../pages/game/game';
import { GameHaraganaRomajiPage } from '../pages/game-haragana-romaji/game-haragana-romaji';

// Services
import { WordService } from './../services/word.service';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyASziY1FvbIZh8acoa_-BkM5MbtlCKDyUY",
  authDomain: "mini-japanese.firebaseapp.com",
  databaseURL: "https://mini-japanese.firebaseio.com",
  projectId: "mini-japanese",
  storageBucket: "mini-japanese.appspot.com",
  messagingSenderId: "1070635075329"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlphabetPage,
    AlphabetHiraganaPage,
    AlphabetKatakanaPage,
    VocabularyPage,
    CommunicationPage,
    GamePage,
    GameHaraganaRomajiPage,
    WordModalPage,
    GameSettingsModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlphabetPage,
    AlphabetHiraganaPage,
    AlphabetKatakanaPage,
    VocabularyPage,
    CommunicationPage,
    GamePage,
    GameHaraganaRomajiPage,
    WordModalPage,
    GameSettingsModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WordService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
