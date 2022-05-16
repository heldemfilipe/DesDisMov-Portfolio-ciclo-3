import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicial',
    pathMatch: 'full'
  },
  {
    path: 'lanches',
    loadChildren: () => import('./lanches/lanches.module').then(m => m.LanchesPageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./inicial/inicial.module').then(m => m.InicialPageModule)
  },
  {
    path: 'pratos',
    loadChildren: () => import('./pratos/pratos.module').then(m => m.PratosPageModule)
  },
  {
    path: 'sobremesa',
    loadChildren: () => import('./sobremesa/sobremesa.module').then(m => m.SobremesaPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then(m => m.BebidasPageModule)
  },
  {
    path: 'pratodia',
    loadChildren: () => import('./pratodia/pratodia.module').then( m => m.PratodiaPageModule)
  },
  {
    path: 'pratoentrada',
    loadChildren: () => import('./pratoentrada/pratoentrada.module').then( m => m.PratoentradaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
