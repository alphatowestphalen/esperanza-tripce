import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Place {
  id: number;
  name: string;
  location: string;
  image: string;
  localImage: string;
  discount: string;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
  @Output() reserve = new EventEmitter<string>();
  places: Place[] = [
    {
      id: 1,
      name: 'Piscine & Bungalows',
      location: 'Île Sainte-Marie',
      image: 'assets/images/gallery/piscine-01.jpg',
      localImage: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80',
      discount: '20% OFF',
      price: 55,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Bungalow Vue Mer',
      location: 'Sainte-Marie, Madagascar',
      image: 'assets/images/gallery/chambre-02.jpg',
      localImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
      discount: '15% OFF',
      price: 85,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Espace Restaurant',
      location: 'Île Sainte-Marie',
      image: 'assets/images/gallery/restaurant-01.jpg',
      localImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
      discount: '10% OFF',
      price: 25,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Suite Prestige',
      location: 'Sainte-Marie, Madagascar',
      image: 'assets/images/gallery/piscine-05.jpg',
      localImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
      discount: '20% OFF',
      price: 180,
      rating: 5.0
    },
  ];

  onImgError(e: Event, fallback: string) {
    const img = e.target as HTMLImageElement;
    img.src = fallback; img.onerror = null;
  }

  scrollTo(anchor: string) {
    document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
  }
}
