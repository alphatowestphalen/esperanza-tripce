import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  @Output() reserve = new EventEmitter<string>();
  steps = [
    { num: '01', title: 'Trouvez votre bungalow idéal', desc: 'Choisissez parmi nos bungalows vue mer, suites prestige ou chambres standard selon vos envies et votre budget.' },
    { num: '02', title: 'Reconnectez-vous à la nature', desc: 'Profitez de la piscine turquoise, des palmiers, de la plage et de l\'océan Indien à deux pas de votre chambre.' },
    { num: '03', title: 'Vivez des saveurs créoles uniques', desc: 'Notre chef prépare chaque jour des spécialités créoles et des fruits de mer frais directement de l\'île.' }
  ];

  reviews = [
    { name: 'Isabelle D.', avatar: 'I', rating: 4.8, comment: 'Vue magnifique sur la piscine !' },
    { name: 'Thomas R.', avatar: 'T', rating: 4.9, comment: 'Bungalows superbes, personnel adorable.' },
    { name: 'Marie L.', avatar: 'M', rating: 5.0, comment: 'Le meilleur séjour de ma vie !' },
  ];

  scrollTo() { document.querySelector('#explore')?.scrollIntoView({ behavior: 'smooth' }); }

  onImgError(e: Event) {
    const img = e.target as HTMLImageElement;
    img.src = 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=700&q=80';
    img.onerror = null;
  }
}
