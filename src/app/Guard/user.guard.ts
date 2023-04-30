import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsermailService  } from '../Service/usermail.service';
@Injectable({
    providedIn: 'root'
  })
    export class UserGuard implements CanActivate {
    constructor(private UsermailService: UsermailService, private router: Router) {}
    canActivate(): boolean {
    const currentUserRole = this.UsermailService.getCurrentUserRole();
    if (this.UsermailService.isLoggedIn() && currentUserRole === 'user') {
        return true;
        }
        else {
        this.router.navigate(['/registered']);   
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
    