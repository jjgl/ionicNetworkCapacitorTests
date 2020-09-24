import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'test-page',
    loadChildren: () => import('./pages/test-page/test-page.module').then( m => m.TestPagePageModule)
  },
  {
    path: 'testappcomponent',
    loadChildren: () => import('./pages/testappcomponent/testappcomponent.module').then( m => m.TestappcomponentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
