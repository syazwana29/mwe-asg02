import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Plans2PageRoutingModule } from './plans2-routing.module';

import { Plans2Page } from './plans2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Plans2PageRoutingModule
  ],
  declarations: [Plans2Page]
})
export class Plans2PageModule {}
