import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameKatakanaRomajiPage } from './game-katakana-romaji';

@NgModule({
  declarations: [
    GameKatakanaRomajiPage,
  ],
  imports: [
    IonicPageModule.forChild(GameKatakanaRomajiPage),
  ],
  exports: [
    GameKatakanaRomajiPage
  ]
})
export class GameKatakanaRomajiPageModule {}
