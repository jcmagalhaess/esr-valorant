import { Routes } from '@angular/router';

export const VALORANT_ROUTES: Routes = [
  { path: '', redirectTo: 'schedule', pathMatch: 'full'},
  { path: 'schedule',
    loadComponent: () => import('./features/schedule/schedule.component').then(c => c.ScheduleComponent),
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full', },
      { path: ':filter', loadComponent: () => import('./features/matches/componentes/view-matches/view-matches.component').then(c => c.ViewMatchesComponent) },
    ]
   },
  { path: 'sports', loadComponent: () => import('./features/schedule/schedule.component').then(c => c.ScheduleComponent) },
  { path: 'live-play', loadComponent: () => import('./features/schedule/schedule.component').then(c => c.ScheduleComponent) },
  { path: 'statistics', loadComponent: () => import('./features/schedule/schedule.component').then(c => c.ScheduleComponent) },
  { path: 'ranking', loadComponent: () => import('./features/schedule/schedule.component').then(c => c.ScheduleComponent) }
];
