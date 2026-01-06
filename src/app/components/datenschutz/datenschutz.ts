import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datenschutz.html',
  styleUrl: './datenschutz.css'
})
export class DatenschutzComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}

