import { IMenu } from '../interfaces/menu.interface';

export const MENU_SCHEDULE: IMenu[] = [
  {
    label: 'All',
    route: '/schedule/all',
  },
  {
    label: 'Completed',
    route: '/schedule/completed',
  },
  {
    label: 'On Going',
    route: '/schedule/ongoing',
  },
  {
    label: 'Upcoming',
    route: '/schedule/upcoming',
  },
];
