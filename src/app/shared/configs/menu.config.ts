import { IMenu } from '../interfaces/menu.interface';

export const MENU_SCHEDULE: IMenu[] = [
  {
    label: 'All',
    route: '/all',
  },
  {
    label: 'Completed',
    route: '/completed',
  },
  {
    label: 'On Going',
    route: '/ongoing',
  },
  {
    label: 'Upcoming',
    route: '/upcoming',
  },
];
