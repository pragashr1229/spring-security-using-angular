import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class PreLoginGuardService implements CanActivate {
  constructor(private router: Router, 
    private authenticateService: AuthenticateService) { }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, 
              routerStateSnapshot: RouterStateSnapshot){    

    var loginStatus = this.authenticateService.loginStatus;
    if(!loginStatus){
      this.router.navigate(['']);
      return false;
    }    
      return true;
    }
}
