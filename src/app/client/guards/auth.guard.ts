import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenServiceService } from '../services/authen/authen-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(public auth: AuthenServiceService, public router: Router) {
  }
  
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(!this.auth.loggedIn()){
      console.log("true");
    return true;
    } else {console.log("false");
      this.router.navigate([''])
      return false;
    }
  }

}
