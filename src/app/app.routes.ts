import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'schedule', pathMatch: 'full' },
  {
    path: 'schedule',
    loadComponent: () => import('./features/schedule/containers/schedule/schedule.component').then(m => m.ScheduleComponent),
  },
  {
    path: 'ranking',
    loadComponent: () => import('./features/ranking/containers/ranking/ranking.component').then(m => m.RankingComponent),
  },
];
