import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NightmarePageRoutingModule } from './nightmare-routing.module';

import { NightmarePage } from './nightmare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NightmarePageRoutingModule
  ],
  declarations: [NightmarePage]
})
export class NightmarePageModule {}
