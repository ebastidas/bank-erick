import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'strategy',
    pathMatch: 'full'
  },
  {
    path: 'strategy',
    loadChildren: () =>
      import('./features/strategy/strategy.module').then(
        (m) => m.StrategyModule
      )
  },
  {
    path: '**',
    redirectTo: 'strategy'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
