import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MENU_SCHEDULE } from '../../../../shared/configs/menu.config';
import { IMenu } from '../../../../shared/interfaces/menu.interface';

@Component({
  selector: 'app-schedule',
  imports: [RouterOutlet, RouterModule],
  standalone: true,
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  public navLinks: IMenu[] = MENU_SCHEDULE;

  // public getSubRoute(route: string) {
  //   return `${mainRouteMFE()}/${route}`
  // }
}
