import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  imports: [],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.css',
  standalone: true,
})
export class Recommendations {
  @Input() items: any[] = [];
  @Input() title = 'Recommendations Based on Your Favorites';
  @Output() details = new EventEmitter<any>();

  trackById = (_: number, item: any) => item.id;

  onDetails(item: any) {
    this.details.emit(item);
  }
}
