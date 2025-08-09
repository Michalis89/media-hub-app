import { Routes } from '@angular/router';
import { UnderConstruction } from './shared/components/under-construction/under-construction';
import { Feed } from './pages/feed/feed';
import { Movies } from './pages/movies/movies';
import { TvSeries } from './pages/tv-series/tv-series';
import { Anime } from './pages/anime/anime';
import { Games } from './pages/games/games';
import { authGuard } from './core/auth.guard';
import { guestGuard } from './core/guest.guard';
import { moduleGuard } from './core/module.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canMatch: [guestGuard],
    loadComponent: () =>
      import('./features/login-register/login-register').then(
        (m) => m.LoginRegister
      ),
  },
  {
    path: '',
    canMatch: [authGuard],
    children: [
      { path: '', component: Feed },
      { path: 'movies', component: Movies, canMatch: [moduleGuard('movies')] },
      {
        path: 'tv-series',
        component: TvSeries,
        canMatch: [moduleGuard('tv-series')],
      },
      { path: 'anime', component: Anime, canMatch: [moduleGuard('anime')] },
      { path: 'games', component: Games, canMatch: [moduleGuard('games')] },
      // κ.λπ.
    ],
  },
  { path: '**', component: UnderConstruction },
];
