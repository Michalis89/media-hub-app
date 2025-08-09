import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanMatchFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  console.log('[authGuard]', { token: auth.token() });
  return auth.isLoggedIn() ? true : router.parseUrl('/auth');
};
