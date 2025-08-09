import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  standalone: true,
})
export class Footer {
  currentYear: number;
  private readonly auth = inject(AuthService);
  constructor() {
    this.currentYear = new Date().getFullYear();
  }
  loggedIn = this.auth.isLoggedIn;
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
