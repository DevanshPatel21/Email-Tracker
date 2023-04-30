import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisteredService } from '../Service/registered.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registeredService: RegisteredService
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.registeredService.getRegistereduserByEmailAndPassword(email, password)
      .subscribe(user => {
        if (!user) {
          alert('Invalid email or password!');
          return;
        }
        console.log(user.password , password , user.email , email);

        if (user.password === password && user.email === email) {
          console.log('User logged in successfully!');
          localStorage.setItem('user', JSON.stringify({ email: user.email, password: user.password,role: user.role}));
          this.router.navigateByUrl('/user-dashboard');
        } else {
          alert('Invalid email or password!');
        }
      });
  }
  userregister() {
    this.router.navigate(['/registered']);
  }

}
