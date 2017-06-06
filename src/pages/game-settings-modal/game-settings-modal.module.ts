import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameSettingsModalPage } from './game-settings-modal';

@NgModule({
  declarations: [
    GameSettingsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(GameSettingsModalPage),
  ],
  exports: [
    GameSettingsModalPage
  ]
})
export class GameSettingsModalPageModule {}
