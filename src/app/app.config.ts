import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { VALORANT_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(VALORANT_ROUTES)]
};
