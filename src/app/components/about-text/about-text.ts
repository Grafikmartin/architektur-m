import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-text.html',
  styleUrl: './about-text.css'
})
export class AboutTextComponent implements OnInit {
  isPart1Visible = false;
  isPart2Visible = false;
  isPart3Visible = false;

  ngOnInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const section = document.getElementById('buero');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionTop = rect.top;
    const sectionBottom = rect.bottom;
    const sectionHeight = rect.height;

    // Calculate visibility based on scroll position
    // Parts appear when section enters viewport and disappear when section leaves
    
    // Part 1: appears when section enters viewport, disappears when section is too far up
    if (sectionTop < windowHeight * 0.8 && sectionBottom > -sectionHeight * 0.2) {
      this.isPart1Visible = true;
    } else {
      this.isPart1Visible = false;
    }

    // Part 2: appears slightly later, disappears when section is too far up
    if (sectionTop < windowHeight * 0.6 && sectionBottom > -sectionHeight * 0.2) {
      this.isPart2Visible = true;
    } else {
      this.isPart2Visible = false;
    }

    // Part 3: appears last, disappears when section is too far up
    if (sectionTop < windowHeight * 0.4 && sectionBottom > -sectionHeight * 0.2) {
      this.isPart3Visible = true;
    } else {
      this.isPart3Visible = false;
    }
  }
}

