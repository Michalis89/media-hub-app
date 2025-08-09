import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { MediaHeroHeader } from '../../shared/components/media-hero-header/media-hero-header';

@Component({
  selector: 'app-feed',
  imports: [CommonModule, MediaHeroHeader],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
  standalone: true,
})
export class Feed {
  items = Array.from({ length: 9 });

  private readonly auth = inject(AuthService);
  user = this.auth.currentUser;

  avatar = computed(() =>
    this.user()
      ? this.user()!.avatarUrl ?? 'https://i.pravatar.cc/100?img=8'
      : 'https://i.pravatar.cc/100?img=8'
  );

  title = computed(() =>
    this.user() ? `Welcome back, ${this.user()!.username}! 👋` : 'Welcome!'
  );

  subtitle = 'Let’s explore what’s new in your media world.';
}
