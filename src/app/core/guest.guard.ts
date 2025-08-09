import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const guestGuard: CanMatchFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  console.log('[guestGuard]', { token: auth.token() });
  return auth.isLoggedIn() ? router.parseUrl('/') : true;
};
