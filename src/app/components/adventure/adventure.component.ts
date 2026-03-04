import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adventure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})
export class AdventureComponent {
  @Output() reserve = new EventEmitter<string>();
  current = signal(0);

  adventures = [
    { city: 'PISCINE', label: 'Piscine & Détente', image: 'assets/images/gallery/piscine-01.jpg', fallback: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=75' },
    { city: 'BUNGALOW', label: 'Séjour Bungalow', image: 'assets/images/gallery/chambre-03.jpg', fallback: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=75' },
    { city: 'RESTAURANT', label: 'Cuisine Créole', image: 'assets/images/gallery/restaurant-02.jpg', fallback: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=75' },
    { city: 'BALEINES', label: 'Safari Baleines', image: 'https://images.unsplash.com/photo-1518715543066-1090d39f2f64?w=400&q=75', fallback: 'https://images.unsplash.com/photo-1518715543066-1090d39f2f64?w=400&q=75' },
    { city: 'ÎLE NATTES', label: 'Île Aux Nattes', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=75', fallback: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=75' },
  ];

  prev() { this.current.set((this.current() - 1 + this.adventures.length) % this.adventures.length); }
  next() { this.current.set((this.current() + 1) % this.adventures.length); }

  onImgError(e: Event, fallback: string) {
    const img = e.target as HTMLImageElement;
    img.src = fallback; img.onerror = null;
  }
}
