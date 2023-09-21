import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, UrlTree, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanMatch, CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  private checkAuthStatus(): boolean | Observable<boolean> {

    return this.authService.checkAuthentication()
      .pipe(
        tap( isAuthenticated => console.log('Authenticated:', isAuthenticated ) ),
        tap( isAuthenticated => {
          if ( !isAuthenticated ) {
            this.router.navigate(['./auth/login'])
          }
        }),

      )

  }


  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    // console.log('Can Match');
    // console.log({ route, segments })
    return this.checkAuthStatus();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    // console.log('Can Activate');
    // console.log({ route, state })

    return this.checkAuthStatus();
  }

}

// import { Injectable, inject } from '@angular/core';
// import { CanActivateFn, CanMatchFn, Router, UrlTree } from '@angular/router';
// import { tap, Observable, take } from 'rxjs';
// import { AuthService } from '../services/auth.service';

// @Injectable({providedIn: 'root'})

// export class AuthGuard {
// }

// const isAuthenticated = (): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
//   const authService = inject(AuthService);
//   const router = inject(Router);
//   return authService.verificarAutenticación().pipe(
//       take(1),
//       tap((isAuthenticated: boolean) => {
//           if (!isAuthenticated) {
//               router.navigate(['./auth/login']);
//           }
//       }),
//   );
// }

// export const canActivateGuard:CanActivateFn = isAuthenticated;
// export const canMatchGuard:CanMatchFn = isAuthenticated;
