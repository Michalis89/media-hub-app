import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  imports: [CommonModule],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
  standalone: true,
})
export class Feed {
  items = Array.from({ length: 9 });
}
