import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username: string ='';
  password: string='';
  role: string='admin';
  errorMessage: string='';

  constructor(private router: Router) {}

  login() {
    // perform login logic here, e.g. call an authentication service
    if (this.username === 'admin' && this.password === 'password') {
      console.log('Login successful');
      localStorage.setItem('user', JSON.stringify({ username: this.username, role: this.role }));
      this.router.navigate(['/admin-dashbord']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
  register() {
    this.router.navigate(['/registered']);
  }
  userlogin() {
    this.router.navigate(['/user-login']);
  }
}
