import { CanActivateFn, Router } from '@angular/router';
import { inject, Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!loggedIn) {
    router.navigate(['/user']);
    return false;
  }

  return true;
};
