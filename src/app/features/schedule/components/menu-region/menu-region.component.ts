import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-region',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './menu-region.component.html',
  styleUrl: './menu-region.component.scss'
})
export class MenuRegionComponent {
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
