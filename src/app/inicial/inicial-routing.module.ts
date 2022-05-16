import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicialPage } from './inicial.page';

const routes: Routes = [
  {
    path: '',
    component: InicialPage
  },
  {
    path: 'lanches',
    loadChildren: () => import('../lanches/lanches.module').then( m => m.LanchesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicialPageRoutingModule { }
