import { Component, EventEmitter, HostListener, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() reserve = new EventEmitter<void>();

  scrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { label: 'Accueil', anchor: '#hero' },
    { label: 'Hôtel', anchor: '#popular' },
    { label: 'Explorer', anchor: '#explore' },
    { label: 'Activités', anchor: '#adventure' },
  ];

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 50); }

  toggleMenu() { this.menuOpen.set(!this.menuOpen()); }

  go(anchor: string) {
    this.menuOpen.set(false);
    document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
  }
}
