import { Routes } from '@angular/router';

export const VALORANT_ROUTES: Routes = [
  { path: '', redirectTo: 'schedule', pathMatch: 'full'},
  { path: 'schedule', loadComponent: () => import('./test/test.component').then(c => c.TestComponent) },
  { path: 'sports', loadComponent: () => import('./test/test.component').then(c => c.TestComponent) },
  { path: 'live-play', loadComponent: () => import('./test/test.component').then(c => c.TestComponent) },
  { path: 'statistics', loadComponent: () => import('./test/test.component').then(c => c.TestComponent) },
  { path: 'ranking', loadComponent: () => import('./test/test.component').then(c => c.TestComponent) }
];
