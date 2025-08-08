import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-trending',
  imports: [],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
  standalone: true,
})
export class Trending {
  @Input() items: any[] = [];
  @Input() title = 'Trending Now';
  @Output() itemClick = new EventEmitter<any>();

  trackById = (_: number, item: any) => item.id;

  onItemClick(item: any) {
    this.itemClick.emit(item);
  }
}
