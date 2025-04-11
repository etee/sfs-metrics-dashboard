/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { TranslateService } from '@ngx-translate/core';


platformBrowserDynamic().bootstrapModule(AppModule)
  .then(moduleRef => {
    const translate = moduleRef.injector.get(TranslateService);
    translate.setDefaultLang('en');
    translate.use('en');
  })
  .catch(err => console.error(err));
