import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordModalPage } from './word-modal';

@NgModule({
  declarations: [
    WordModalPage,
  ],
  imports: [
    IonicPageModule.forChild(WordModalPage),
  ],
  exports: [
    WordModalPage
  ]
})
export class WordModalPageModule {}
