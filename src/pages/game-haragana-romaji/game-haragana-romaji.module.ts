import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameHaraganaRomajiPage } from './game-haragana-romaji';

@NgModule({
  declarations: [
    GameHaraganaRomajiPage,
  ],
  imports: [
    IonicPageModule.forChild(GameHaraganaRomajiPage),
  ],
  exports: [
    GameHaraganaRomajiPage
  ]
})
export class GameHaraganaRomajiPageModule {}
