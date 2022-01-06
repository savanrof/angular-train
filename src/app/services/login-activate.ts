import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthorService } from "./author.service";

@Injectable({
    providedIn: 'root'
})
export class LoginActivate implements CanActivate{
    constructor(private authService: AuthorService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.authService.isLogged()) {
      this.router.navigate(['login']);
    }
    return true;
  }
}