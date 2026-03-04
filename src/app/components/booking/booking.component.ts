import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  @Output() reserve = new EventEmitter<string>();
  goContact() { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }
  onImgError(e: Event) {
    const img = e.target as HTMLImageElement;
    img.src = 'https://images.unsplash.com/photo-1540202403-b7abd6747a18?w=1200&q=80';
    img.onerror = null;
  }
}
