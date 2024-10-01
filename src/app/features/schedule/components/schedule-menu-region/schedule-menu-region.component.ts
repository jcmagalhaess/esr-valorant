import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-menu-region',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './schedule-menu-region.component.html',
  styleUrl: './schedule-menu-region.component.scss'
})
export class ScheduleMenuRegionComponent {
  public regions = [
    {
      name:'South America',
      flagURL: ''
    },
    {
      name:'North America',
      flagURL: ''
    },
    {
      name:'Asia',
      flagURL: ''
    },
    {
      name:'Europe',
      flagURL: ''
    }
  ]
}
