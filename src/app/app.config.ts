import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    { provide: CUSTOM_ELEMENTS_SCHEMA, useValue: true },
  ],
};
