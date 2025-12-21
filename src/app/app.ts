import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ImageGridComponent } from './components/image-grid/image-grid';
import { IntroTextComponent } from './components/intro-text/intro-text';
import { AboutTextComponent } from './components/about-text/about-text';
import { ServicesComponent } from './components/services/services';
import { ServicesGridComponent } from './components/services-grid/services-grid';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ImageGridComponent, IntroTextComponent, AboutTextComponent, ServicesComponent, ServicesGridComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
