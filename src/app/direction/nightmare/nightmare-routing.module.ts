import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NightmarePage } from './nightmare.page';

const routes: Routes = [
  {
    path: '',
    component: NightmarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NightmarePageRoutingModule {}
