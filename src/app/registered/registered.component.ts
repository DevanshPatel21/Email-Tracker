import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisteredService } from '../Service/registered.service';
import { model } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {
  role:string='user';
  userform: FormGroup;

  constructor(private formBuilder: FormBuilder, private registeredService: RegisteredService, private router: Router) {
    this.userform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const user: model = {
      name: this.userform.value.name,
      role: 'user',
      email: this.userform.value.email,
      phone: this.userform.value.phone,
      password: this.userform.value.password,
      confirmPassword: this.userform.value.confirmPassword,

    };
    this.registeredService.addRegistered(user).subscribe(() => {
      localStorage.setItem('user', JSON.stringify({email: user.email, password: user.password, role: user.role}));
      alert('Registered successfully!');
      this.userform.reset();
    });
  }
  userLogin() {
    this.router.navigate(['/user-login']);
  }

}
