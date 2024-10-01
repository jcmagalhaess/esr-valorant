import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-schedule-matches',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './schedule-matches.component.html',
  styleUrl: './schedule-matches.component.scss'
})
export class ScheduleMatchesComponent {
  
}
