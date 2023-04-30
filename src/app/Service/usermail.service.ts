import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usermail } from '../model/usermail.model';
import { Route,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsermailService {

  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient,private router:Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('role') === 'admin') { // check if user is admin
      return true;
    } else {
      this.router.navigate(['/admin']); // redirect to login if not admin
      return false;
    }
  }
  getusermail(): Observable<usermail[]> {
    return this.http.get<usermail[]>(`${this.API_URL}/email-detail`);
  }

  addusermail(usermail: usermail): Observable<usermail> {
    return this.http.post<usermail>(`${this.API_URL}/email-detail`, usermail);
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
