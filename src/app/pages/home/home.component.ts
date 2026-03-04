import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { PopularComponent } from '../../components/popular/popular.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ExploreComponent } from '../../components/explore/explore.component';
import { AdventureComponent } from '../../components/adventure/adventure.component';
import { BookingComponent } from '../../components/booking/booking.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ReservationComponent } from '../../components/reservation/reservation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    PopularComponent,
    FeaturesComponent,
    ExploreComponent,
    AdventureComponent,
    BookingComponent,
    FooterComponent,
    ReservationComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  modalOpen = signal(false);
  preselectedRoom = signal('');

  openModal(room = '') {
    this.preselectedRoom.set(room);
    this.modalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modalOpen.set(false);
    document.body.style.overflow = '';
  }
}
