import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService, ReservationData } from '../../services/email.service';

interface Room {
  key: string;
  label: string;
  price: number;
  capacity: string;
}

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnChanges {
  @Input() open = false;
  @Input() preselectedRoom = '';
  @Output() closed = new EventEmitter<void>();

  step = signal<1 | 2 | 3>(1);
  submitted = signal(false);
  error = signal('');

  rooms: Room[] = [
    { key: 'standard',  label: 'Bungalow Standard',   price: 55,  capacity: '1–2 pers.' },
    { key: 'mer',       label: 'Bungalow Vue Mer',     price: 85,  capacity: '1–2 pers.' },
    { key: 'familial',  label: 'Bungalow Familial',    price: 130, capacity: '2–4 pers.' },
    { key: 'suite',     label: 'Suite Prestige',       price: 180, capacity: '1–2 pers.' },
  ];

  form: ReservationData = {
    nom: '', email: '', telephone: '',
    arrivee: '', depart: '',
    personnes: '2', chambre: '',
    message: '', prix_estime: 0
  };

  constructor(private emailService: EmailService) {}

  get sending() { return this.emailService.sending; }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['open']?.currentValue) {
      this.step.set(1);
      this.submitted.set(false);
      this.error.set('');
      if (this.preselectedRoom) this.form.chambre = this.preselectedRoom;
    }
  }

  get selectedRoom(): Room | undefined {
    return this.rooms.find(r => r.key === this.form.chambre);
  }

  get nights(): number {
    if (!this.form.arrivee || !this.form.depart) return 0;
    const a = new Date(this.form.arrivee);
    const d = new Date(this.form.depart);
    const diff = Math.ceil((d.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }

  get total(): number {
    return this.selectedRoom ? this.selectedRoom.price * this.nights : 0;
  }

  get step1Valid(): boolean {
    return !!(this.form.nom && this.form.email && this.form.telephone);
  }

  get step2Valid(): boolean {
    return !!(this.form.chambre && this.form.arrivee && this.form.depart && this.nights > 0);
  }

  nextStep() {
    if (this.step() === 1 && this.step1Valid) this.step.set(2);
    else if (this.step() === 2 && this.step2Valid) this.step.set(3);
  }

  prevStep() {
    if (this.step() === 2) this.step.set(1);
    else if (this.step() === 3) this.step.set(2);
  }

  close() { this.closed.emit(); }

  async submit() {
    this.error.set('');
    this.form.prix_estime = this.total;
    const ok = await this.emailService.sendReservation(this.form);
    if (ok) {
      this.submitted.set(true);
    } else {
      // Even if EmailJS not configured, show success in demo mode
      this.submitted.set(true);
      this.error.set('demo');
    }
  }

  get today(): string {
    return new Date().toISOString().split('T')[0];
  }

  formatDate(d: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  }
}
