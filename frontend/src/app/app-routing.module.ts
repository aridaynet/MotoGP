import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pilotos',
    loadChildren: () => import('./pilotos/pilotos.module').then( m => m.PilotosPageModule)
  },
  {
    path: 'updatepilotos/:id',
    loadChildren: () => import('./updatepilotos/updatepilotos.module').then( m => m.UpdatepilotosPageModule)
  },
  {
    path: 'deletepilotos',
    loadChildren: () => import('./deletepilotos/deletepilotos.module').then( m => m.DeletepilotosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
