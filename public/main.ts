import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './appModule';
import { enableProdMode } from '@angular/core';

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
