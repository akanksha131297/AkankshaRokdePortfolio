import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, ErrorHandler } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { EMAIL_JS_CONFIG } from './core/tokens/email.tokens';
import { environment } from '../environments/environment';

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    console.error('Global error:', error);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideLottieOptions({
      player: () => player,
    }),
    { provide: EMAIL_JS_CONFIG, useValue: environment.emailJs }
  ]
};
