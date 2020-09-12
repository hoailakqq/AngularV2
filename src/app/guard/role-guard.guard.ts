import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanDeactivate,
} from "@angular/router";
import { Observable } from "rxjs";
import decode from "jwt-decode";
import { AuthenServiceService } from "../client/services/authen/authen-service.service";
@Injectable({
  providedIn: "root",
})
export class RoleGuardGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(public auth: AuthenServiceService, public router: Router) {}
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.auth.currentUserValue;
    if (this.auth.isAuthenticated() && currentUser.roleId ==1) {
      return true;
    } else {
      this.auth.logoutUser();
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
