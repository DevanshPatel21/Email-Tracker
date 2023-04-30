import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';
import { EmailService } from '../Service/email.service';
import { TrackDialogComponent } from '../track-dialog/track-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  visitors: any[] = [];
  constructor(
    private UserService: UserService,
    private router:Router,
    private emailservice:EmailService,
    private dialog: MatDialog) { }
  ngOnInit(): void {
    this.UserService.getmail().subscribe(data => {
      this.visitors = data;
      this.visitors.forEach(visitor => {
        this.visitors[visitor.To] = visitor.To;
        console.log(visitor.To);
      }
      );
    });
  }
  // deletemail(id: string): void {
  //   if (confirm('Are you sure you want to delete this visitor?')) {
  //     console.log(id);
  //     this.UserService.deletemail(id).subscribe(() => {
  //       this.visitors = this.visitors.filter(visitor => visitor.id !== id);
  //     });
  //   }
  // }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/admin']);
  }
  
  fetchEmails(data: string): void {
    this.emailservice.fetch(data).subscribe((data) => {
      console.log(data);
      const dialogRef = this.dialog.open(TrackDialogComponent, {
        width: '1200px',
        height: '400px',
        data: data,
      });
    });
  }
}
