import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-user-lists',
  imports: [],
  templateUrl: './media-user-lists.html',
  styleUrl: './media-user-lists.css',
  standalone: true,
})
export class MediaUserLists {
  @Input() title = '';
  @Input() items: any[] = [];
  @Input() emptyMessage = 'No entries yet.';
  @Input() icon = '';
  @Input() maxHeight = 'max-h-[300px]';
}
