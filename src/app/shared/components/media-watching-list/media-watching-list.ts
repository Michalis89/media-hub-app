import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-media-watching-list',
  imports: [CommonModule],
  templateUrl: './media-watching-list.html',
  styleUrl: './media-watching-list.css',
  standalone: true,
})
export class MediaWatchingList {
  @Input() items: any[] = [];
  @Input() tabs: any[] = [];
  @Input() activeTab!: string;
  @Input() emptyMessage = 'No items found.';

  @Output() tabChange = new EventEmitter<string>();
  @Output() userRate = new EventEmitter<{ item: any; rating: number }>();
  @Output() statusChange = new EventEmitter<{ item: any; status: string }>();
  @Output() favoriteToggled = new EventEmitter<any>();
  @Output() hatedToggled = new EventEmitter<any>();
  @Output() removeItem = new EventEmitter<any>();
  @Output() details = new EventEmitter<any>();

  // quick options for status switcher
  statuses: Array<'watching' | 'completed' | 'onHold' | 'dropped'> = [
    'watching',
    'completed',
    'onHold',
    'dropped',
  ];

  onTabChange(tabKey: string) {
    this.tabChange.emit(tabKey);
  }

  setUserRating(item: any, rating: number) {
    const r = Math.max(0, Math.min(10, Number.isFinite(rating) ? rating : 0));
    item.userRating = r; // immediate UI feedback
    this.userRate.emit({ item, rating: r });
  }

  getProgressPct(item: any): number {
    if (item?.progress != null) {
      return Math.max(0, Math.min(100, Math.round(item.progress)));
    }
    if (item?.episodes && item?.lastWatched != null) {
      const pct = (item.lastWatched / item.episodes) * 100;
      return Math.max(0, Math.min(100, Math.round(pct)));
    }
    return 0;
  }

  changeStatus(item: any, status: string) {
    this.statusChange.emit({ item, status });
  }
  toggleFavorite(item: any) {
    this.favoriteToggled.emit(item);
  }
  toggleHated(item: any) {
    this.hatedToggled.emit(item);
  }
  remove(item: any) {
    this.removeItem.emit(item);
  }
}
