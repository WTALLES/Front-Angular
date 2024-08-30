import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import  {AuthLoginService} from "./service/auth-login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthLoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.autorizado == true) {
      console.log("autorizado")
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
