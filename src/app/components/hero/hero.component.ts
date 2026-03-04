import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Output() reserve = new EventEmitter<string>();
  activeTab = signal<'hotel' | 'activites' | 'restaurant' | 'transport'>('hotel');

  search = {
    destination: 'Île Sainte-Marie',
    checkin: '',
    checkout: '',
    guests: '1 Chambre, 2 Voyageurs'
  };

  tabs = [
    { key: 'hotel' as const, icon: '🏨', label: 'Hôtel' },
    { key: 'activites' as const, icon: '🤿', label: 'Activités' },
    { key: 'restaurant' as const, icon: '🍽️', label: 'Restaurant' },
    { key: 'transport' as const, icon: '🚤', label: 'Transport' },
  ];

  doSearch() { this.reserve.emit(''); }
}
