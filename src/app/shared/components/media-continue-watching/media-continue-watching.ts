import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-media-continue-watching',
  imports: [],
  templateUrl: './media-continue-watching.html',
  styleUrl: './media-continue-watching.css',
})
export class MediaContinueWatching {
  @Input() items: any[] = [];
  @Input() title = 'Continue Watching';
  @Input() emptyMessage = 'You have nothing in progress.';
  @Input() progressLabel: ((item: any) => string) | null = null;
  @Output() resume = new EventEmitter<any>();

  onResume(item: any) {
    console.log('Resuming item:', item);
  }
}
