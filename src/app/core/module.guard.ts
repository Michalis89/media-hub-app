import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, map, of } from 'rxjs';

type ModuleKey = 'movies' | 'anime' | 'tv-series' | 'books' | 'games' | 'music';

export const moduleGuard =
  (key: ModuleKey): CanMatchFn =>
  () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    const hasModule = (u: any) => !!u?.settings?.activeModules?.includes(key);

    if (!auth.token()) return router.parseUrl('/auth');

    const u = auth.currentUser();
    if (u) return hasModule(u) ? true : router.parseUrl('/');

    return auth.me().pipe(
      map((user) => (hasModule(user) ? true : router.parseUrl('/'))),
      catchError(() => of(router.parseUrl('/auth')))
    );
  };
