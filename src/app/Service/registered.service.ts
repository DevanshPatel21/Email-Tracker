import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { model } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisteredService {

  private apiUrl = 'http://localhost:3000/registered';

  constructor(private http: HttpClient) { }

  addRegistered(model: model): Observable<model> {
    return this.http.post<model>(this.apiUrl, model);
  }

  getRegistered(): Observable<model[]> {
    return this.http.get<model[]>(this.apiUrl);
  }

  deleteRegistered(id: string): Observable<model> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<model>(url);
  }
  getRegistereduserByEmailAndPassword(email: string, password: string): Observable<model> {
    const url = `${this.apiUrl}?email=${email}&password=${password}`;
    return this.http.get<model[]>(url).pipe(
      map(users => users[0])
    );
  }
}
