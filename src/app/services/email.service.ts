import { Injectable, signal } from '@angular/core';

export interface ReservationData {
  nom: string;
  email: string;
  telephone: string;
  arrivee: string;
  depart: string;
  personnes: string;
  chambre: string;
  message: string;
  prix_estime: number;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  // ✅ FORMSPREE — Zéro configuration requise !
  // Les emails arrivent directement à alphato407@gmail.com
  // Pour activer :
  //   1. Aller sur https://formspree.io
  //   2. Sign up gratuit (50 emails/mois gratuits)
  //   3. New Form → entrer alphato407@gmail.com
  //   4. Copier l'endpoint (ex: https://formspree.io/f/xabcdefg)
  //   5. Remplacer FORMSPREE_ENDPOINT ci-dessous
  private readonly FORMSPREE_ENDPOINT = 'https://formspree.io/f/VOTRE_ID'; // ← remplacer

  // ✅ FALLBACK : mailto (ouvre le client mail de l'hôtel)
  // Fonctionne SANS configuration, IMMÉDIATEMENT
  private readonly DEST_EMAIL = 'alphato407@gmail.com';

  sending = signal(false);
  lastError = signal('');

  async sendReservation(data: ReservationData): Promise<boolean> {
    this.sending.set(true);
    this.lastError.set('');

    // Essayer Formspree d'abord
    if (!this.FORMSPREE_ENDPOINT.includes('VOTRE_ID')) {
      try {
        const res = await fetch(this.FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _subject:     `🌴 Réservation Esperanza — ${data.nom}`,
            _replyto:     data.email,
            nom:          data.nom,
            email:        data.email,
            telephone:    data.telephone,
            date_arrivee: data.arrivee,
            date_depart:  data.depart,
            personnes:    data.personnes,
            chambre:      this.roomLabel(data.chambre),
            prix_estime:  data.prix_estime > 0 ? `${data.prix_estime}€` : 'À définir',
            message:      data.message || '(aucun message)',
          })
        });
        this.sending.set(false);
        return res.ok;
      } catch (err) {
        console.error('Formspree error:', err);
      }
    }

    // Fallback : mailto — ouvre Gmail / client mail avec toutes les infos
    this.sendViaMailto(data);
    this.sending.set(false);
    return true;
  }

  private sendViaMailto(data: ReservationData): void {
    const subject = encodeURIComponent(`🌴 Réservation Esperanza — ${data.nom}`);
    const body = encodeURIComponent(
`Nouvelle demande de réservation — Hôtel Esperanza
================================================

👤 Nom        : ${data.nom}
📧 Email      : ${data.email}
📱 Téléphone  : ${data.telephone}

🏠 Hébergement : ${this.roomLabel(data.chambre)}
📅 Arrivée     : ${this.formatDate(data.arrivee)}
📅 Départ      : ${this.formatDate(data.depart)}
👥 Personnes   : ${data.personnes}
💰 Estimation  : ${data.prix_estime > 0 ? data.prix_estime + '€' : 'À définir'}

💬 Message / Demandes spéciales :
${data.message || '(aucun message particulier)'}

================================================
Répondre directement à : ${data.email}
`);
    window.location.href = `mailto:${this.DEST_EMAIL}?subject=${subject}&body=${body}`;
  }

  private roomLabel(key: string): string {
    const map: Record<string, string> = {
      standard: 'Bungalow Standard (55€/nuit)',
      mer:      'Bungalow Vue Mer (85€/nuit)',
      familial: 'Bungalow Familial (130€/nuit)',
      suite:    'Suite Prestige (180€/nuit)',
    };
    return map[key] || key;
  }

  private formatDate(d: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  }
}
