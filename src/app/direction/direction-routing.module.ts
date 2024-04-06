import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectionPage } from './direction.page';

const routes: Routes = [
  {
    path: '',
    component: DirectionPage
  },  {
    path: 'sleep',
    loadChildren: () => import('./sleep/sleep.module').then( m => m.SleepPageModule)
  },
  {
    path: 'awake',
    loadChildren: () => import('./awake/awake.module').then( m => m.AwakePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectionPageRoutingModule {}
