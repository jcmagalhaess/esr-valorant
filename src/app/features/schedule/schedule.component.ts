import { Component } from "@angular/core";
import { ScheduleCardLiveNowComponent } from "./components/schedule-card-live-now/schedule-card-live-now.component";
import { ScheduleMenuEventsComponent } from "./components/schedule-menu-events/schedule-menu-events.component";
import { ScheduleMenuRegionComponent } from "./components/schedule-menu-region/schedule-menu-region.component";
import { ScheduleMatchesComponent } from "./components/schedule-matches/schedule-matches.component";

@Component({
  selector: "app-schedule",
  standalone: true,
  imports: [
    ScheduleCardLiveNowComponent,
    ScheduleMenuEventsComponent,
    ScheduleMenuRegionComponent,
    ScheduleMatchesComponent,
  ],
  templateUrl: "./schedule.component.html",
  styleUrl: "./schedule.component.scss",
})
export class ScheduleComponent {}
