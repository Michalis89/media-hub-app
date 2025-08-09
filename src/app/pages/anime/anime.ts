// src/app/pages/anime/anime.ts
import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { MediaHeroHeader } from '../../shared/components/media-hero-header/media-hero-header';

@Component({
  selector: 'app-anime',
  imports: [CommonModule, MediaHeroHeader],
  templateUrl: './anime.html',
  styleUrl: './anime.css',
  standalone: true,
})
export class Anime {
  private readonly auth = inject(AuthService);
  user = this.auth.currentUser;

  avatar = computed(() =>
    this.user()
      ? this.user()!.avatarUrl ?? 'https://i.pravatar.cc/100?img=8'
      : 'https://i.pravatar.cc/100?img=8'
  );

  title = computed(() =>
    this.user()
      ? `Welcome back, <span class="text-pink-500">${
          this.user()!.username
        }</span>!<br/>to Your Anime List 🍥`
      : 'Anime Library !'
  );

  subtitle = 'Track your anime journey and discover new series.';
}
