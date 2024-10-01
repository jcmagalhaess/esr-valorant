import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-card-live-now',  
  standalone: true,
  imports: [],
  templateUrl: './schedule-card-live-now.component.html',
  styleUrl: './schedule-card-live-now.component.scss'
})
export class ScheduleCardLiveNowComponent {
  public liveMatch = {
    team1: {
      name: 'LEVIATÁN',
      logoURL: 'https://owcdn.net/img/61b8888cc3860.png',
      score: 1
    },
    team2: {
      name: 'Sentinels',
      logoURL: 'https://owcdn.net/img/62875027c8e06.png',
      score: 0
    }
  }

}