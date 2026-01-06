import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { ImageGridComponent } from './components/image-grid/image-grid';
import { IntroTextComponent } from './components/intro-text/intro-text';
import { AboutTextComponent } from './components/about-text/about-text';
import { ServicesComponent } from './components/services/services';
import { ServicesGridComponent } from './components/services-grid/services-grid';
import { FooterComponent } from './components/footer/footer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderComponent, ImageGridComponent, IntroTextComponent, AboutTextComponent, ServicesComponent, ServicesGridComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
  isLegalPage = signal(false);

  constructor(private router: Router) {
    // Initial: Hauptseite anzeigen (isLegalPage = false)
    // Nur bei expliziten Legal-Routen auf true setzen
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRoute();
      });
    
    // Prüfe nach kurzer Verzögerung, damit Router initialisiert ist
    setTimeout(() => {
      this.checkRoute();
    }, 0);
  }

  private checkRoute() {
    const routerUrl = (this.router.url || '').toLowerCase();
    const hash = (window.location.hash || '').toLowerCase();
    
    // Prüfe nur auf exakte Legal-Routen
    const isLegal = routerUrl === '/impressum' || 
                   routerUrl === '/datenschutz' ||
                   routerUrl === 'impressum' ||
                   routerUrl === 'datenschutz' ||
                   hash === '#/impressum' ||
                   hash === '#/datenschutz';
    
    this.isLegalPage.set(isLegal);
  }
}
