import { Component } from '@angular/core';
import { MatchesComponent } from '../matches/matches.component';
import { CardLiveNowComponent } from './components/card-live-now/card-live-now.component';
import { MenuEventsComponent } from './components/menu-events/menu-events.component';
import { MenuRegionComponent } from './components/menu-region/menu-region.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    CardLiveNowComponent, 
    MenuRegionComponent, 
    MenuEventsComponent, 
    MatchesComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

}
