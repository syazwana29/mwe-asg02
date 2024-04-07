import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Plans2Page } from './plans2.page';

const routes: Routes = [
  {
    path: '',
    component: Plans2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Plans2PageRoutingModule {}
