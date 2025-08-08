import { Routes } from '@angular/router';
import { UnderConstruction } from './shared/components/under-construction/under-construction';
import { Feed } from './pages/feed/feed';
import { Movies } from './pages/movies/movies';
import { TvSeries } from './pages/tv-series/tv-series';
import { Anime } from './pages/anime/anime';
import { Games } from './pages/games/games';

export const routes: Routes = [
  {
    path: '',
    component: Feed,
  },
  {
    path: 'movies',
    component: Movies,
  },
  {
    path: 'tv-series',
    component: TvSeries,
  },
  {
    path: 'anime',
    component: Anime,
  },
  {
    path: 'games',
    component: Games,
  },
  {
    path: '**',
    component: UnderConstruction,
  },
];
