import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ImageGridComponent } from './components/image-grid/image-grid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ImageGridComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
