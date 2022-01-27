import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class PostLoginGuardService implements CanActivate {
  constructor(private router: Router, 
    private authenticateService: AuthenticateService) { }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, 
              routerStateSnapshot: RouterStateSnapshot){    
    var loginStatus = this.authenticateService.loginStatus;
    if(loginStatus){
      this.router.navigate(['tasks']);
      return false;
    }    
    return true;
  }
}
