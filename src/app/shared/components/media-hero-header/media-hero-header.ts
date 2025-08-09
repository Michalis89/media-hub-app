import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-hero-header',
  imports: [CommonModule],
  templateUrl: './media-hero-header.html',
  styleUrl: './media-hero-header.css',
})
export class MediaHeroHeader {
  @Input() avatar: string = 'https://i.pravatar.cc/100?img=8';
  @Input() title: string = 'Anime Library 🍥';
  @Input() subtitle: string =
    'Track your anime journey and discover new series.';

  plainTitle = '';
}
