import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {


  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private router:Router) { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('role') === 'user') { // check if user is admin
        return true;
      } else {
        this.router.navigate(['/user-login']); // redirect to login if not admin
        return false;
      }
    }
    getmail(): Observable<any> {
      return this.http.get(`${this.API_URL}/email-detail`);
    }
    gettrackmail(): Observable<any> {
      return this.http.get(`${this.API_URL}/track-mail`);
    }
    getonlienVisitors(): Observable<any> {
      return this.http.get(`${this.API_URL}/registered`);
    }    
    // deletemail(id: string): Observable<any> {
    //   return this.http.delete(`${this.API_URL}/email-detail?To=${id}`);
    // } 
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
