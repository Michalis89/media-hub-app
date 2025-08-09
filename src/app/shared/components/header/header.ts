import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/auth.service';

type ModuleKey = 'movies' | 'anime' | 'tv-series' | 'books' | 'games' | 'music';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
})
export class Header {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  menuOpen = false;

  loggedIn = this.auth.isLoggedIn;
  user = computed(() => this.auth.currentUser());

  avatar = computed(() =>
    this.user()
      ? this.user()!.avatarUrl ?? 'https://i.pravatar.cc/100?img=8'
      : 'https://i.pravatar.cc/100?img=8'
  );

  private readonly allNav = [
    { key: 'movies' as const, label: 'Movies', path: '/movies' },
    { key: 'tv-series' as const, label: 'Tv Series', path: '/tv-series' },
    { key: 'anime' as const, label: 'Anime', path: '/anime' },
    { key: 'games' as const, label: 'Games', path: '/games' },
    { key: 'music' as const, label: 'Music', path: '/music' },
    { key: 'books' as const, label: 'Books', path: '/books' },
  ];

  active = computed(
    () => new Set<ModuleKey>(this.user()?.settings?.activeModules ?? [])
  );

  navItems = computed(() =>
    this.allNav.filter((i) => this.active().has(i.key))
  );

  closeMenu() {
    const el = document.getElementById(
      'menu-toggle'
    ) as HTMLInputElement | null;
    if (el) el.checked = false;
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/auth');
  }
}
