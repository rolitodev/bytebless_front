import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { NbThemeModule, NbToastrModule } from '@nebular/theme';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const configAlerts = {

}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NbThemeModule.forRoot({ name: 'default' }), NbToastrModule.forRoot(configAlerts)),
    provideAnimationsAsync()
  ]
};
