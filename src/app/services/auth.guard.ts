import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthGuardService} from "./authguard.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authGuardService: AuthGuardService, private router: Router) {
  }

  canActivate(): boolean {
    if (!this.authGuardService.getToken()) {
      this.router.navigateByUrl("/login").then(() => console.log("navigation failed"));
    }
    return this.authGuardService.getToken();
  }

}
