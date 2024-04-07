import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tracker2Page } from './tracker2.page';

const routes: Routes = [
  {
    path: '',
    component: Tracker2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tracker2PageRoutingModule {}
