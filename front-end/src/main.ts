import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import '@angular/compiler';  // Manually import the compiler

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // Bootstrap the AppModule and handle any errors
