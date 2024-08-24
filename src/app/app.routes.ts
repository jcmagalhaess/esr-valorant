import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const VALORANT_ROUTES: Routes = [
  { 
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'schedule', pathMatch: 'full' },
      { path: 'schedule', loadComponent: () => import('./features/schedule/schedule.component').then(c => c.ScheduleComponent) },
      { path: 'sports', loadComponent: () => import('./features/sports/sports.component').then(c => c.SportsComponent) },
      { path: 'live-play', loadComponent: () => import('./features/live-play/live-play.component').then(c => c.LivePlayComponent) },
      { path: 'statistics', loadComponent: () => import('./features/stats/stats.component').then(c => c.StatsComponent) },
      { path: 'ranking', loadComponent: () => import('./features/ranking/ranking.component').then(c => c.RankingComponent) }
    ]
  }
];
