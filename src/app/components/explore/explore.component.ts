import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Filter = 'all' | 'bungalow' | 'piscine' | 'restaurant' | 'activite' | 'plage';

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  fallback: string;
  price: number;
  unit: string;
  rating: number;
  category: Filter;
}

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  @Output() reserve = new EventEmitter<string>();
  activeFilter = signal<Filter>('all');
  showAll = signal(false);

  filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'Tout voir' },
    { key: 'bungalow', label: 'Bungalows' },
    { key: 'piscine', label: 'Piscine' },
    { key: 'restaurant', label: 'Restaurant' },
    { key: 'activite', label: 'Activités' },
    { key: 'plage', label: 'Plage & Mer' },
  ];

  destinations: Destination[] = [
    { id:1, name:'Bungalow Standard',      location:'Île Sainte-Marie', image:'assets/images/gallery/chambre-01.jpg', fallback:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=75', price:55,  unit:'/nuit', rating:4.6, category:'bungalow' },
    { id:2, name:'Bungalow Vue Mer',        location:'Île Sainte-Marie', image:'assets/images/gallery/chambre-02.jpg', fallback:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&q=75', price:85,  unit:'/nuit', rating:4.9, category:'bungalow' },
    { id:3, name:'Piscine Turquoise',       location:'Hôtel Esperanza',  image:'assets/images/gallery/piscine-03.jpg', fallback:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&q=75', price:0,   unit:'inclus', rating:4.8, category:'piscine'  },
    { id:4, name:'Restaurant Créole',       location:'Île Sainte-Marie', image:'assets/images/gallery/restaurant-02.jpg', fallback:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=75', price:25,  unit:'/repas', rating:4.7, category:'restaurant' },
    { id:5, name:'Suite Prestige',          location:'Île Sainte-Marie', image:'assets/images/gallery/piscine-05.jpg', fallback:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&q=75', price:180, unit:'/nuit', rating:5.0, category:'bungalow' },
    { id:6, name:'Bar Bambou',              location:'Hôtel Esperanza',  image:'assets/images/gallery/restaurant-01.jpg', fallback:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=75', price:8,   unit:'/cocktail', rating:4.5, category:'restaurant' },
    { id:7, name:'Safari Baleines 🐋',      location:'Sainte-Marie',     image:'https://images.unsplash.com/photo-1518715543066-1090d39f2f64?w=500&q=75', fallback:'https://images.unsplash.com/photo-1518715543066-1090d39f2f64?w=500&q=75', price:60,  unit:'/pers.', rating:4.9, category:'activite' },
    { id:8, name:'Plongée & Snorkeling',    location:'Sainte-Marie',     image:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=75', fallback:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=75', price:45,  unit:'/pers.', rating:4.7, category:'activite' },
    { id:9, name:'Plage & Lagon',           location:'Sainte-Marie',     image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=75', fallback:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=75', price:0,   unit:'accès libre', rating:4.8, category:'plage' },
    { id:10, name:'Kayak & Paddle',         location:'Sainte-Marie',     image:'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500&q=75', fallback:'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500&q=75', price:20,  unit:'/heure', rating:4.6, category:'activite' },
    { id:11, name:'Piscine Vue Palmiers',   location:'Hôtel Esperanza',  image:'assets/images/gallery/piscine-04.jpg', fallback:'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=500&q=75', price:0,   unit:'inclus', rating:4.8, category:'piscine' },
    { id:12, name:'Île Aux Nattes',         location:'Sainte-Marie',     image:'https://images.unsplash.com/photo-1540202403-b7abd6747a18?w=500&q=75', fallback:'https://images.unsplash.com/photo-1540202403-b7abd6747a18?w=500&q=75', price:35,  unit:'/excursion', rating:4.9, category:'plage' },
  ];

  get filtered(): Destination[] {
    const f = this.activeFilter();
    const list = f === 'all' ? this.destinations : this.destinations.filter(d => d.category === f);
    return this.showAll() ? list : list.slice(0, 6);
  }

  get hasMore(): boolean {
    const f = this.activeFilter();
    const total = f === 'all' ? this.destinations.length : this.destinations.filter(d => d.category === f).length;
    return !this.showAll() && total > 6;
  }

  onImgError(e: Event, fallback: string) {
    const img = e.target as HTMLImageElement;
    img.src = fallback; img.onerror = null;
  }

  goContact() { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }
}
