import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AduserService } from './aduser.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private aduserservice: AduserService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.aduserservice.isAuthenticated(), 'RRRRRRRRRRRRRRRR');
    return this.aduserservice.isAuthenticated();
  }

}









