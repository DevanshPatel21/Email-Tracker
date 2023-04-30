import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private UserService: UserService, private router: Router) {}

  canActivate(): boolean {
    const currentUserRole = this.UserService.getCurrentUserRole();
    if (this.UserService.isLoggedIn() && currentUserRole === 'admin') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  getCurrentUserRole(): string {
    const currentUser = localStorage.getItem('user');
    if (currentUser !== null) {
      const user = JSON.parse(currentUser);
      return user.role;
    }
    return '';
  }
  isLoggedIn(): boolean {
    return true;
  }
}
