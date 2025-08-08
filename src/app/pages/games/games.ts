import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [CommonModule],
  templateUrl: './games.html',
  styleUrl: './games.css',
  standalone: true,
})
export class Games {
  games = [
    {
      id: 1,
      title: 'God of War Ragnarok',
      platform: 'PlayStation',
      release: '2022',
      cover: 'gowr.jpg',
    },
    {
      id: 2,
      title: 'Elden Ring',
      platform: 'PC',
      release: '2022',
      cover: 'eldenring.jpg',
    },
    {
      id: 3,
      title: 'Zelda: Tears of the Kingdom',
      platform: 'Nintendo Switch',
      release: '2023',
      cover: 'zelda.jpg',
    },
    {
      id: 4,
      title: 'Cyberpunk 2077',
      platform: 'PC',
      release: '2020',
      cover: 'cyberpunk.jpg',
    },
  ];
}
