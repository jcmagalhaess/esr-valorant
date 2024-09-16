import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { CountdownComponent } from "../countdown/countdown.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-matches",
  standalone: true,
  imports: [CommonModule, CountdownComponent],
  templateUrl: "./view-matches.component.html",
  styleUrl: "./view-matches.component.scss",
})
export class ViewMatchesComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  
  private filter!: string;
  private readonly matches = [
    {
      live: false,
      finished: true,
      date: "2024-08-20T14:30",
      event: {
        name: "Valorant Champions 2024",
        logoURL: "https://owcdn.net/img/63067806d167d.png",
      },
      team1: {
        name: "LEVIATÁN",
        logoURL: "https://owcdn.net/img/61b8888cc3860.png",
        score: 2,
        winner: true
      },
      team2: {
        name: "G2 Esports ",
        logoURL: "https://owcdn.net/img/633822848a741.png",
        score: 0,
        winner: false
      },
    },
    {
      live: true,
      finished: false,
      date: "2024-08-25T14:00",
      event: {
        name: "Valorant Champions 2024",
        logoURL: "https://owcdn.net/img/63067806d167d.png",
      },
      team1: {
        name: "LEVIATÁN",
        logoURL: "https://owcdn.net/img/61b8888cc3860.png",
        score: 1,
        winner: false
      },
      team2: {
        name: "Sentinels",
        logoURL: "https://owcdn.net/img/62875027c8e06.png",
        score: 0,
        winner: false
      },
    },
    {
      live: false,
      finished: false,
      date: "2024-10-26T17:00",
      event: {
        name: "Game Changers 2024 Brazil: Series 2",
        logoURL: "https://owcdn.net/img/604be13d01964.png",
      },
      team1: {
        name: "LOUD GC",
        logoURL: "https://owcdn.net/img/62bbec8dc1b9f.png",
        score: 0,
        winner: false
      },
      team2: {
        name: "MIBR GC",
        logoURL: "https://owcdn.net/img/632be7626d6d9.png",
        score: 0,
        winner: false
      },
    },
    {
      live: false,
      finished: false,
      date: "2024-10-27T20:00",
      event: {
        name: "Game Changers 2024 Brazil: Series 2",
        logoURL: "https://owcdn.net/img/604be13d01964.png",
      },
      team1: {
        name: "Team Liquid Brazil",
        logoURL: "https://owcdn.net/img/640c381f0603f.png",
        score: 0,
        winner: false
      },
      team2: {
        name: "MIBR GC",
        logoURL: "https://owcdn.net/img/632be7626d6d9.png",
        score: 0,
        winner: false
      },
    },
    {
      live: false,
      finished: false,
      date: "2024-10-29T20:00",
      event: {
        name: "Game Changers 2024 Brazil: Series 2",
        logoURL: "https://owcdn.net/img/604be13d01964.png",
      },
      team1: {
        name: "Team Liquid Brazil",
        logoURL: "https://owcdn.net/img/640c381f0603f.png",
        score: 0,
        winner: false
      },
      team2: {
        name: "TBS GC",
        logoURL: "https://owcdn.net/img/6224df17276a2.png",
        score: 0,
        winner: false
      },
    },
  ];

  public matchesToView: Array<any> = [];


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.filter = params['filter'];

      if(this.filter === 'all'){
        this.matchesToView = this.matches;
      } else if(this.filter === 'live-now'){
        this.matchesToView = this.matches.filter( match => match.live === true);
      } else if(this.filter === 'results'){
        this.matchesToView = this.matches.filter( match => match.finished === true);
      } else if(this.filter === 'upcoming'){
        this.matchesToView = this.matches.filter( match => match.live === false && match.finished === false);
      }

    });
  }

  public getHour(dateString: string): string {
    let date = new Date(dateString);
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  public getDate(dateString: string): string {
    let date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
    });
  }
}
