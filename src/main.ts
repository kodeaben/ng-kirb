import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';
import { KirbyDemoModule } from './kirby-demo/kirby-demo.module';

platformBrowserDynamic()
  .bootstrapModule(KirbyDemoModule)
  .catch((err) => console.error(err));
