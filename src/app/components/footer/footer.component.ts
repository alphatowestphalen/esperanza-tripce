import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Output() reserve = new EventEmitter<string>();
  year = new Date().getFullYear();
  email = '';
  subscribed = false;

  subscribe() { if (this.email) { this.subscribed = true; } }
  go(anchor: string) { document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' }); }
}
