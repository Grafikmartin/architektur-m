import { Routes } from '@angular/router';
import { ImpressumComponent } from './components/impressum/impressum';
import { DatenschutzComponent } from './components/datenschutz/datenschutz';

export const routes: Routes = [
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent
  }
];
