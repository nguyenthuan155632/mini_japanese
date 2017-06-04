import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlphabetHiraganaPage } from './alphabet-hiragana';

@NgModule({
  declarations: [
    AlphabetHiraganaPage,
  ],
  imports: [
    IonicPageModule.forChild(AlphabetHiraganaPage),
  ],
  exports: [
    AlphabetHiraganaPage
  ]
})
export class AlphabetHiraganaPageModule {}
