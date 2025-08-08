import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-user-stats',
  imports: [],
  templateUrl: './media-user-stats.html',
  styleUrl: './media-user-stats.css',
})
export class MediaUserStats {
  @Input() stats: { label: string; value: string | number }[] = [];
  @Input() title = 'Your Stats';
  @Input() icon = '📊';
}
