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
    path: 'personal-details',
    loadChildren: () =>
      import('./features/personal-details/personal-details.module').then(
        (m) => m.PersonalDetailsModule
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
