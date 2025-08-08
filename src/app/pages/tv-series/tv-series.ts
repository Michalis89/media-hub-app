import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-series',
  imports: [CommonModule],
  templateUrl: './tv-series.html',
  styleUrl: './tv-series.css',
  standalone: true,
})
export class TvSeries {
  tvSeries = [
    {
      id: 1,
      title: 'Breaking Bad',
      genre: 'Crime / Drama',
      seasons: 5,
      poster: 'bAD_POSTER.jpg',
    },
    {
      id: 2,
      title: 'Stranger Things',
      genre: 'Sci-Fi / Thriller',
      seasons: 4,
      poster: 'stranger_POSTER.jpg',
    },
    {
      id: 3,
      title: 'The Office',
      genre: 'Comedy',
      seasons: 9,
      poster: 'office_POSTER.jpg',
    },
    {
      id: 4,
      title: 'Chernobyl',
      genre: 'Drama / History',
      seasons: 1,
      poster: 'chernobyl_POSTER.jpg',
    },
  ];
}
