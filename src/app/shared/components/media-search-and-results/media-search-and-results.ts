import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  isSignal,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-media-search-and-results',
  imports: [CommonModule, FormsModule],
  templateUrl: './media-search-and-results.html',
  styleUrl: './media-search-and-results.css',
  standalone: true,
})
export class MediaSearchAndResults {
  @Input() items: any[] = [];
  @Input() placeholder = 'Search...';
  @Input() emptyMessage = 'No results found.';
  @Input() title = 'Search Results';
  @Output() itemClick = new EventEmitter<any>();

  searchQuery = '';

  get itemsList() {
    const value = isSignal(this.items) ? this.items() : this.items;
    return Array.isArray(value) ? value : [];
  }

  onDetails(item: any) {
    this.itemClick.emit(item);
  }
}
