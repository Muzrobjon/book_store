import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginservService } from './loginserv.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public loginserv: LoginservService, public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.loginserv.isLoggedin) return true;
    else {
      this.router.navigateByUrl('/login');
      return false;
    } 
  }
}
