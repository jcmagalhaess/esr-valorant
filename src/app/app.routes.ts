import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'schedule', pathMatch: 'full' },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./features/schedule/schedule.routes').then((m) => m.routes),
  },
  {
    path: 'ranking',
    loadComponent: () =>
      import('./features/ranking/containers/ranking/ranking.component').then(
        (m) => m.RankingComponent
      ),
  },
];
