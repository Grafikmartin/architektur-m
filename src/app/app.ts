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
    // Prüfe initial
    this.checkRoute();
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRoute();
      });
  }

  private checkRoute() {
    const url = this.router.url || window.location.hash || window.location.pathname || '';
    const isLegal = url.includes('impressum') || url.includes('datenschutz');
    this.isLegalPage.set(isLegal);
  }
}
