import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsermailService } from '../Service/usermail.service';
import { usermail } from '../model/usermail.model';
import { Router } from '@angular/router';
import { EmailService } from '../Service/email.service';
@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.css']
})
export class UserDashbordComponent implements OnInit {

  usermailForm: FormGroup;
  usermail: usermail[] = [];

  constructor(private formBuilder: FormBuilder, private UsermailService: UsermailService,private router: Router,private emailService: EmailService) {
    this.usermailForm = this.formBuilder.group({
      Subject: ['', Validators.required],
      To: ['', [Validators.required, Validators.email]],
      Text: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.UsermailService.getusermail().subscribe((usermail: usermail[]) => {
      this.usermail = usermail;
    });
  }
  onSubmit(): void {
    const usermail: usermail = {
      Subject: this.usermailForm.value.Subject,
      To: this.usermailForm.value.To,
      Text: this.usermailForm.value.Text,
    };
    
    this.UsermailService.addusermail(usermail).subscribe(() => {
      alert('Mail Sent successfully!');
      this.usermailForm.reset();
      this.usermail.push(usermail);
      this.emailService.trackEmail(usermail.To).subscribe();
    });

  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/user-login']);
  }



}

