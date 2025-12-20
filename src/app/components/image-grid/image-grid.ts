import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-grid.html',
  styleUrl: './image-grid.css'
})
export class ImageGridComponent implements OnInit {
  imagePairs: { front: string; back: string }[] = [];
  totalImages = 6; // Maximal 6 Bilder

  ngOnInit() {
    // Liste aller verfügbaren Bilder
    const allImages = [
      '01-kindertagesstaetten-lissabon-summary.jpg',
      '05-fassade-wohngebaeude-elevendecks-hamburg-heidelberg-materials Kopie.jpg',
      '19b991239ff05d5df37f385effd92d20.jpg',
      '1a85b0d6e3c96b6d45889e69b83d933f.jpg',
      '531fef0085b723666a81ee691e71814f.jpg',
      '650e2485470251f932fb58f5410154f8.jpg',
      'GettyImages-102381531.webp',
      'GettyImages-150652954.webp',
      'GettyImages-520909866.webp',
      'GettyImages-521758154.webp',
      'GettyImages-540983914.webp',
      'Haus-in-Niedersachsen-1.jpg',
      'HouseFallingwater.jpg',
      'Moderne-Architektur-Kubus-Villa-655.jpg',
      'Niagara_Falls_New_York_Turtle_building_July_2024.webp',
      'abstract-1138967_1920.jpg',
      'bauenmitlehm.jpg',
      'building-6011756.jpg',
      'c99a87c002b9c7fac7430caf44e3a064.jpg',
      'colors-2004497_1920.jpg',
      'eb52671e55750ad45a548ec7d27ac700.jpg',
      'f16cb9ff5206f4c87f13f1ff9880f3a5.jpg',
      'moderne-architektur-wuerfel-2-640x480.jpg',
      'organische_architektur_hero.jpg'
    ];

    // Zufällige Mischung der Bilder
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    
    // 12 eindeutige Bilder auswählen (6 Paare = 12 Bilder)
    const selectedImages = shuffled.slice(0, this.totalImages * 2);
    
    // Für jedes Flip-Card zwei eindeutige Bilder zuweisen
    for (let i = 0; i < this.totalImages; i++) {
      this.imagePairs.push({
        front: selectedImages[i * 2],
        back: selectedImages[i * 2 + 1]
      });
    }
  }
}

