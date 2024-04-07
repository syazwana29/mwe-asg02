import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tracker2PageRoutingModule } from './tracker2-routing.module';

import { Tracker2Page } from './tracker2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tracker2PageRoutingModule
  ],
  declarations: [Tracker2Page]
})
export class Tracker2PageModule {}
