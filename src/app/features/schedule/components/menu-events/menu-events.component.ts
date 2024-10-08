import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-events',
  standalone: true,
  imports: [],
  templateUrl: './menu-events.component.html',
  styleUrl: './menu-events.component.scss'
})
export class MenuEventsComponent {
  public events = [
    {
      name: 'Valorant Champions 2024',
      logoURL: 'https://owcdn.net/img/63067806d167d.png',
    },
    {
      name: 'CBVL: Premier League',
      logoURL: 'https://owcdn.net/img/668cb2d1117ef.png'
    },
    {
      name: 'Champions Tour 2024 Americas: Ascension',
      logoURL: 'https://owcdn.net/img/6009f963577f4.png'
    },
    {
      name: 'Game Changers 2024 Pacific',
      logoURL: 'https://owcdn.net/img/604be13d01964.png'
    }
  ]
}
