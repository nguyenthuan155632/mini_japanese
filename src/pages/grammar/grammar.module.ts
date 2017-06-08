import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrammarPage } from './grammar';

@NgModule({
  declarations: [
    GrammarPage,
  ],
  imports: [
    IonicPageModule.forChild(GrammarPage),
  ],
  exports: [
    GrammarPage
  ]
})
export class GrammarPageModule {}
