import { Component, signal, OnInit } from '@angular/core';
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
export class App implements OnInit {
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
  }

  ngOnInit() {
    // Prüfe Route nach Initialisierung
    this.checkRoute();
  }

  private checkRoute() {
    // Warte kurz, damit Router initialisiert ist
    setTimeout(() => {
      const routerUrl = (this.router.url || '').toLowerCase().trim();
      const hash = (window.location.hash || '').toLowerCase().trim();
      const pathname = (window.location.pathname || '').toLowerCase().trim();
      
      // Kombiniere alle URL-Teile für robuste Prüfung
      const fullUrl = (routerUrl + ' ' + hash + ' ' + pathname).toLowerCase();
      
      // Prüfe nur auf explizite Legal-Routen
      // Standardmäßig: Hauptseite (isLegalPage = false)
      const isLegal = fullUrl.includes('/impressum') || 
                     fullUrl.includes('/datenschutz') ||
                     fullUrl.includes('#/impressum') || 
                     fullUrl.includes('#/datenschutz') ||
                     routerUrl === '/impressum' ||
                     routerUrl === '/datenschutz' ||
                     routerUrl === 'impressum' ||
                     routerUrl === 'datenschutz' ||
                     hash === '#/impressum' ||
                     hash === '#/datenschutz';
      
      this.isLegalPage.set(isLegal);
    }, 100);
  }
}
