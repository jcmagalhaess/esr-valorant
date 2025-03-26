import { Routes } from "@angular/router";
import { ScheduleComponent } from "./containers/schedule/schedule.component";

export const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      {
        path: 'all',
        loadComponent: () => import('./containers/schedule-scoreboard/schedule-scoreboard.component').then(m => m.ScheduleScoreboardComponent),
      },
      {
        path: 'completed',
        loadComponent: () => import('./containers/schedule-scoreboard/schedule-scoreboard.component').then(m => m.ScheduleScoreboardComponent),
      },
      {
        path: 'ongoing',
        loadComponent: () => import('./containers/schedule-scoreboard/schedule-scoreboard.component').then(m => m.ScheduleScoreboardComponent),
      },
      {
        path: 'upcoming',
        loadComponent: () => import('./containers/schedule-scoreboard/schedule-scoreboard.component').then(m => m.ScheduleScoreboardComponent),
      }
    ]
  },
]
