import { InitService } from './core/services/init/init.service';
import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './core/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([errorInterceptor])
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: (initService: InitService) => () => initService.getDeviceType(),
      deps: [InitService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (initService: InitService) => () => initService.getThemeFromLocal(),
      deps: [InitService],
      multi: true
    }
  ]
};
