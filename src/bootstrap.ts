// bootstrap.ts (ou o arquivo que seu main.ts está importando)
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Adicione provideAnimations() no appConfig
const updatedConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideAnimations(), // ✅ Garante que as animações do Material funcionem
  ],
};

bootstrapApplication(AppComponent, updatedConfig).catch(err => console.error(err));
