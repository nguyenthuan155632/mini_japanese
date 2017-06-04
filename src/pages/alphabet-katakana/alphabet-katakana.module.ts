import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlphabetKatakanaPage } from './alphabet-katakana';

@NgModule({
  declarations: [
    AlphabetKatakanaPage,
  ],
  imports: [
    IonicPageModule.forChild(AlphabetKatakanaPage),
  ],
  exports: [
    AlphabetKatakanaPage
  ]
})
export class AlphabetKatakanaPageModule {}
