import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PHONE, EMAIL } from '../../constants/contact';

@Component({
  selector: 'app-about',
  imports: [MatMenuModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  phone = PHONE;
  email = EMAIL;

  onPhoneClick(): void {
    window.open(`tel:${this.phone}`, '_blank');
  }

  onEmailClick(): void {
    window.open(`mailto:${this.email}?Subject=Anik, Let's Connect`, '_blank');
  }
}
