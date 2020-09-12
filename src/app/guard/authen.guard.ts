import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenServiceService } from '../client/services/authen/authen-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(public auth: AuthenServiceService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.auth.isAuthenticated();
    if (currentUser) {
      this.router.navigate([""]);
      return false;
    }
    // not logged in so redirect to login page with the return url
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
